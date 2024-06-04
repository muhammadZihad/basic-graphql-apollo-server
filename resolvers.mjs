export const resolvers = {
    Query: {
        checkApiStatus: () => {
            return { status: 'The API is working correctly' }
        }
    }
}