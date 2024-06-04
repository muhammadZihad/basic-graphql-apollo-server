export const resolvers = {
    Query: {
        checkApiStatus: () => {
            return { status: 'The API is working correctly' }
        }
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            return {
                firstName: args.input.firstName,
                lastName: args.input.lastName,
                email: args.input.email,
            }
        }
    }
}