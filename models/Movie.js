import { model, Schema } from "mongoose"


const Movie = model('Movie', new Schema({
    title: String,
    description: String,
    rated: String
}))

export default Movie