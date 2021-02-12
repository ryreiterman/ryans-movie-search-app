const { Schema, model } = require('mongoose');

const favoriteMovieSchema = new Schema(
	{
	Poster: String,
	Title: String,
	Year: String,
	imdbID: String
	// comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

const favoriteMovie = model('favoriteMovie', favoriteMovieSchema);
module.exports = favoriteMovie;
