import { gql } from "apollo-server";


export const typeDefs = `#graphql
    type Query {
        checkApiStatus: ApiStatus
    }

    type ApiStatus {
        status: String
    }

    type Mutation {
        createUser(input: UserInput): User
    }

    input UserInput {
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type User {
        firstName: String
        lastName: String
        email: String
    }
`