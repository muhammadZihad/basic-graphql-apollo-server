import 'colors'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema/index.js'
import { resolvers } from './resolvers/index.js'
import 'dotenv/config'
import mongoose, { Mongoose } from 'mongoose'

const API_PORT = process.env.API_PORT || 4000;
const MONGODB = process.env.DB_CONNECTION_STRING;

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB)
    .then(() => {
        console.log("MongoDB is connected")
        return startStandaloneServer(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
            listen: { port: API_PORT }
        })
    })
    .then((res) => {
        console.log((`Server is running at: `.green + ` ${res.url}`.yellow))
        console.log('Query at:'.magenta + ' https://studio.apollographql.com/dev'.yellow)
    })
