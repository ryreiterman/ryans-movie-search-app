import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export default function MovieShowPage(props) {
	const [movie, setMovie] = useState({});

	// const [query, updateQuery] = useState({
	// 	baseURL: 'https://www.omdbapi.com/?',
	// 	apiKey: 'apikey=' + '843f9512',
	// 	option: '&i=',
	// 	imdbID: '',
	// 	searchURL: ''
	// });

	// useEffect(() => {
	// 	(async () => {
	// 		if (query.searchURL) {
	// 			try {
	// 				const response = await fetch(query.searchURL);
	// 				const data = await response.json();
	// 				await setMovie(data);
	// 				console.log(data);
	// 			} catch (error) {
	// 				console.error(error);
	// 			} finally {
	// 				updateQuery({
	// 					baseURL: 'https://www.omdbapi.com/?',
	// 					apiKey: 'apikey=' + '843f9512',
	// 					option: '&i=',
	// 					imdbID: '',
	// 					searchURL: ''
	// 				});
	// 			}
	// 		}
	// 	})();
	// }, [query]);

	// const handleSubmit = event => {
	// 	updateQuery({
	// 		...query,
	// 		searchURL: query.baseURL + query.apiKey + query.option + query.imdbID
	// 	});
	// };

	// pull blog based on id
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
				{/* <button onClick={handleSubmit}>Show More</button> */}
			</div>
		</>
	);
}
