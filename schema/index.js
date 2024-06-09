

export const typeDefs = `#graphql
    type Query {
        checkApiStatus: ApiStatus
        movie(ID: ID!): Movie!
        getMovies(amount: Int): [Movie]
    }

    type ApiStatus {
        status: String
    }

    type Mutation {
        addMovie(movieInput: MovieInput): Movie!
    }


    type Movie {
        title: String
        description: String
        rated: String
    }

    input MovieInput {
        title: String,
        description: String
        rated: String
    }
`