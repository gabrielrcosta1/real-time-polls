
# Enquetes em Tempo Real

## Português

### Sobre o Projeto

Este projeto é um sistema de enquetes em tempo real, desenvolvido para proporcionar uma experiência interativa e imediata a todos os participantes. Utilizando tecnologias modernas como WebSockets, Node.js, TypeScript, Docker, PostgreSQL, Fastify e Prisma, nosso sistema é capaz de oferecer atualizações ao vivo, permitindo que os usuários vejam os resultados das enquetes à medida que são atualizados em tempo real.

### Tecnologias Utilizadas

- **WebSockets**: Para comunicação em tempo real entre cliente e servidor.
- **Node.js**: Como ambiente de execução para o servidor.
- **TypeScript**: Linguagem de programação usada para desenvolver o projeto, oferecendo tipagem estática.
- **Docker**: Para contêinerização e fácil implantação do projeto.
- **PostgreSQL**: Banco de dados relacional para armazenamento dos dados.
- **Fastify**: Framework  para Node.js.
- **Prisma**: ORM TypeScript para gestão de banco de dados, facilitando a interação com o PostgreSQL.

### Como Iniciar

1. **Clone o Repositório**
   
   ```
   git clone https://seu-repositorio.com/projeto-enquetes.git
   ```

2. **Instalação de Dependências**
   
   Navegue até a pasta do projeto e instale as dependências:
   
   ```
   cd projeto-enquetes
   npm install
   ```

3. **Configuração do Ambiente**

   Certifique-se de configurar as variáveis de ambiente necessárias, incluindo as credenciais do banco de dados PostgreSQL e configurações do servidor.

4. **Executando com Docker**

   Com Docker e Docker-Compose instalados, execute:
   
   ```
   docker-compose up --build
   ```

5. **Acessando o Sistema**

   Após a inicialização, o sistema estará disponível em `http://localhost:3000`.

## English

### About the Project

This project is a real-time polling system, developed to provide an interactive and immediate experience for all participants. Using modern technologies such as WebSockets, Node.js, TypeScript, Docker, PostgreSQL, Fastify, and Prisma, our system is capable of delivering live updates, allowing users to see poll results as they are updated in real-time.

### Technologies Used

- **WebSockets**: For real-time communication between client and server.
- **Node.js**: As the server runtime environment.
- **TypeScript**: Programming language used to develop the project, offering static typing.
- **Docker**: For containerization and easy deployment of the project.
- **PostgreSQL**: Relational database for data storage.
- **Fastify**: Fast and low overhead web framework for Node.js.
- **Prisma**: TypeScript ORM for database management, simplifying interactions with PostgreSQL.

### Getting Started

1. **Clone the Repository**
   
   ```
   git clone https://your-repository.com/polling-project.git
   ```

2. **Install Dependencies**
   
   Navigate to the project folder and install the dependencies:
   
   ```
   cd polling-project
   npm install
   ```

3. **Environment Setup**

   Make sure to set up the necessary environment variables, including PostgreSQL database credentials and server configurations.

4. **Running with Docker**

   With Docker and Docker-Compose installed, run:
   
   ```
   docker-compose up --build
   ```

5. **Accessing the System**

   After initialization, the system will be available at `http://localhost:3000`.
