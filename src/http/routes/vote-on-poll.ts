import { randomUUID } from "crypto"
import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { date, z } from 'zod';
import { redis } from "../../lib/redis";

export async function voteOnPoll(app: FastifyInstance) {
    app.post('/polls/:pollId/votes', async (request, reply) => {
        const voteOnPollBody = z.object({
            pollOptionId: z.string().uuid()
        })
        const voreOnPollParams = z.object({
            pollId: z.string().uuid()
        })
        const { pollId } = voreOnPollParams.parse(request.params)
        const { pollOptionId } = voteOnPollBody.parse(request.body)

        let { sessionId } = request.cookies

        if (sessionId){
            const userPreviousVoteOnPoll = await prisma.vote.findUnique({
                where: {
                    sessionId_pollId : {
                        sessionId,
                        pollId
                    }
                }
            })
            if ( userPreviousVoteOnPoll && userPreviousVoteOnPoll.pollOptionId !== pollOptionId ) 
            {
             await prisma.vote.delete({
                where:{
                    id: userPreviousVoteOnPoll.id
                }
             })
            }else if (userPreviousVoteOnPoll) {
                return reply.status(400).send({
                    message: "Você ja realizou um voto nessa aplicação"
                })
            }
        }
        if(!sessionId){

            sessionId = randomUUID()
            reply.setCookie('sessionId',sessionId,{
                path: '/',
                maxAge: 60 * 60 * 24 *30, // 30 days,
                signed: true,
                httpOnly: true,
            })

        }
       
      await prisma.vote.create({
        data: {
            sessionId,
            pollId,
            pollOptionId
        }
      }
      )
      
      await redis.zincrby(pollId,1,pollOptionId)
      
        return reply.status(201).send();
    })
}