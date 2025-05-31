# RentX

RentX é uma API REST desenvolvida para gerenciar um sistema de aluguel de veículos. O sistema permite o cadastro de categorias, especificações, usuários, autenticação e importação de dados via CSV.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Swagger (Não implementado)
- Prisma ORM
- JsonWebToken
- bycriptjs

## Como Executar o Projeto

```bash
# Clone o repositório


# Acesse a pasta do projeto
cd rentx

# Instale as dependências
npm install

# Execute as migrations 
npx prisma migrate dev

# Inicie o servidor
npm run start
```

Certifique-se de configurar o arquivo .env com os dados do banco de dados e JWT.
- Não implementado
## Rotas da API

### Criar Categoria

- Rota: POST /categories
- Descrição: Cria uma nova categoria de veículos.
- Corpo da Requisição:

```json
{
  "name": "new specification",
  "description": "new description"
}
```

- Resposta esperada:

```json
{
  "id": "uuid",
  "name": "new specification",
  "description": "new description",
  "created_at": "data"
}
```

### Importar Categorias via CSV

- Rota: POST /categories/import
- Descrição: Importa um arquivo .csv contendo uma lista de categorias.
- Headers necessários:
  - Content-Type: multipart/form-data

- Formato do CSV:

```csv
name,description
SUV,Veículos utilitários
Sedan,Carros de passeio com porta-malas
```

- Exemplo com cURL:

```bash
curl -X POST http://localhost:3333/categories/import   -F file=@./categorias.csv
```

- Resposta esperada:

```json
{
  "message": "Categorias importadas com sucesso"
}
```

### Criar Especificação

- Rota: POST /specifications
- Descrição: Cria uma nova especificação de veículos.
- Corpo da Requisição:

```json
{
  "name": "su2v",
  "description": "carro grande"
}
```

- Resposta esperada:

```json
{
  "id": "uuid",
  "name": "su2v",
  "description": "carro grande",
  "created_at": "data"
}
```

### Criar Usuário

- Rota: POST /users
- Descrição: Cria um novo usuário no sistema.
- Corpo da Requisição:

```json
{
  "name": "new specification",
  "username": "new description2",
  "email": "newdescription@gmail.com",
  "password": "123123",
  "drive_license": "123-123"
}
```

- Resposta esperada:

```json
{
  "message": "Usuário criado com sucesso"
}
```

### Autenticação de Usuário

- Rota: POST /users/authentication
- Descrição: Autentica um usuário e retorna um token JWT.
- Corpo da Requisição:

```json
{
  "username": "admin",
  "password": "123456"
}
```

- Resposta esperada:

```json
{
  "user": {
    "id": "uuid",
    "name": "Admin",
    "email": "admin@example.com"
  },
  "token": "jwt-token-gerado"
}
```

## Contato

Em caso de dúvidas ou sugestões, entre em contato pelo GitHub ou abra uma issue.