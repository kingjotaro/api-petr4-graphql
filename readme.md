# API GraphQL de dados petr4
Esta é uma API GraphQL para consultar e gerenciar dados financeiros petr4. 
Ela utiliza as seguintes tecnologias:

[Apollo Server](https://www.apollographql.com/docs/apollo-server/)
[Class Validator](https://github.com/typestack/class-validator)
[dotenv](https://github.com/motdotla/dotenv)
[GraphQL](https://graphql.org)
[Mongoose](https://mongoosejs.com)
[Reflect Metadata](https://rbuckton.github.io/reflect-metadata/)
[TypeGraphQL](https://typegraphql.com)

## Modelagem
A API é composta por um modelo "Book" que contém as seguintes propriedades:

close: String!   
date: String!  
max: String!  
open: String!  
priceAjst: String!  
volume: String!  

## Mutations
As seguintes mutações estão disponíveis:

`createNewBook(createNewBook: createBook!):` Book!: Cria um novo dados com base nos parâmetros informados.  
`editBook(editBookObject: editBook!): Book!:` Edita um dados com base na data informada.  
`removeFromBook(date: String!): String!:` Remove um dados com base na data informada.  

## Queries
As seguintes queries estão disponíveis: 
 
`byDate(date: String!):` Book!: Retorna um dados com base na data informada.

## Como utilizar
Para utilizar a API, siga os seguintes passos:

Clone este repositório em sua máquina.  
Instale as dependências com o comando `npm install`.  
Inicie o servidor com o comando `npm start`.  
Localhost padrão `http://localhost:4000/graphql`.  