const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Movie = module.exports = mongoose.model('Movie', movieSchema);

module.exports.addMovie = (movie, callback) => {
    const newMovie = new Movie({
        name: movie,
    });
    newMovie.save(callback)
};
