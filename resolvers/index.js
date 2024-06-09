import Movie from "../models/Movie.js"

export const resolvers = {
    Query: {
        checkApiStatus: () => {
            return { status: 'The API is working correctly' }
        },

        async movie(parent, { ID }) {
            return await Movie.findById(ID)
        },

        async getMovies(_, { amount }) {
            console.log(`fetching ${amount} movie(s)`)
            return await Movie.find().sort({ title: 1 }).limit(amount)
        }
    },

    Mutation: {
        async addMovie(parent, { movieInput: { title, description, rated } }) {
            const movie = new Movie({
                title: title,
                description: description,
                rated: rated
            })

            const res = await movie.save()

            return res;
        }
    }
}