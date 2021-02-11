const { Schema, model } = require('mongoose');

const favoriteMovieSchema = new Schema({
	title: String,
	releaseDate: String,
	imdbID: String
	// comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

const favoriteMovie = model('favoriteMovie', favoriteMovieSchema);
module.exports = favoriteMovie;
