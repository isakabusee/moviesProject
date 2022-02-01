import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: String,
    thumbnail: String,
})

const MovieTitles = mongoose.model('MovieTitles', movieSchema);
export default MovieTitles;