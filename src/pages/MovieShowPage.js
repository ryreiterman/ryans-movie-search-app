import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export default function MovieShowPage(props) {
	const [movie, setMovie] = useState({});

	

	// pull movie based on id
	useEffect(() => {
		(async () => {
			try {
				// fetch blog post
				const response = await fetch(`/api/favorites/${props.match.params.id}`);
				const data = await response.json();
				setMovie(data);
			} catch (error) {
				console.error(error);
			}
		})();
		// only loads when page loads = []
	}, []);

	return (
		<>
			<h1 className="page-title">{movie.Title}</h1>
			<div className="grid-wrapper show-page-grid">
				<div className="grid-item show-page-item">
					<img src={movie.Poster} />
					<h4>Year Released: {movie.Year}</h4>
					<h4>Rating: {movie.Rating} Stars</h4>
				</div>
			</div>
		</>
	);
}
