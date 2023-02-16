import "reflect-metadata";
import path from 'path';
import {ApolloServer} from 'apollo-server'
import { userResolvers } from "./src/Resolver";
import { buildSchema } from "type-graphql";
import "./mongodb/database";




async function app() {
    const schema = await buildSchema({
        resolvers: [
            userResolvers 
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        validate: false
    })
   
   

    const server = new ApolloServer({
        schema,
    })
    const {url} = await server.listen()

    console.log(`Server on ${url}`);
}

app();