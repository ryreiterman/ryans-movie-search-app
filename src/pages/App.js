import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';
import Favorites from './Favorites';
import config from '../config';
import 'tailwindcss/tailwind.css';

export default function App(props) {
	const [movie, setMovie] = useState({});
	const [favorite, setFavorite] = useState([]);
	const [query, updateQuery] = useState({
		baseURL: 'https://www.omdbapi.com/?',
		apiKey: 'apikey=' + config.apiKey,
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
					console.log(data.Search[0].Title);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'https://www.omdbapi.com/?',
						apiKey: 'apikey=' + config.apiKey,
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
		<div className="p-3">
			<h1 className="text-4xl text-center">Ryan's Movie Search App</h1>

			<form className="text-center mt-8" onSubmit={handleSubmit}>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
					className="border border-gray-500 p-1 mr-1 focus:ring-2 focus:ring-blue-600"
				/>
				<input
					type="submit"
					value="Find Movies"
					className="p-1 border border-gray-500"
				/>
			</form>
			<div>
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
