import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';
import Favorites from './Favorites';

export default function App(props) {
	const [movie, setMovie] = useState({});
	const [favorite, setFavorite] = useState([]);
	const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + '843f9512',
		option: '&s=',
		title: '',
		searchURL: ''
	});

	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setMovie(data);
					console.log(data);
					// console.log(data.Search[0].Title);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'http://www.omdbapi.com/?',
						apiKey: 'apikey=' + '843f9512',
						option: '&s=',
						title: '',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.apiKey + query.option + query.title
		});
	};

	//////// Add favorite to database //////////////
	const handleSubmitFavorite = async e => {
		// e.preventDefault();
		console.log(e);
		const titleValue = e.Title;
		const yearValue = e.Year;
		const posterValue = e.Poster;
		const imdbIDValue = e.imdbID;
		const ratingValue = e.Rating;

		try {
			const response = await fetch('/api/favorites', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					Title: titleValue,
					Year: yearValue,
					Poster: posterValue,
					imdbID: imdbIDValue,
					Rating: ratingValue
				})
			});
			const data = await response.json();
			setFavorite([...favorite, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="page-wrapper">
			<h1 className="page-title">Ryan's Movie Search App</h1>

			<form onSubmit={handleSubmit}>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
					className="movie-search-field"
				/>
				<input type="submit" value="Find Movies" className="button" />
			</form>
			<div className={'Page'}>
				{Object.keys(movie).length ? (
					<MovieInfo
						movie={movie}
						handleSubmitFavorite={handleSubmitFavorite}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
}
