import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites(props) {
	const [favorite, setFavorite] = useState([]);
	const [didDelete, setDidDelete] = useState(false);

	// Grab favorites from database
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/favorites/`);

				const data = await response.json();
				console.log(data);
				setFavorite(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// // pull movie based on id
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			// fetch movie
	// 			const response = await fetch(`/api/favorites/${props.match.params.id}`);
	// 			const data = await response.json();
	// 			setFavorite(data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// 	// only loads when page loads = []
	// }, [favorite, didDelete]);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/favorites/${e._id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/favorites');
		}
	};

	return (
		<>
			<h1 className="page-title">Favorite Movies</h1>
			<div className="grid-wrapper">
				{favorite.map(i => {
					return (
						<>
							<div key={i.imdbID} className="grid-item">
								<img src={i.Poster} />

								<h2>Title: {i.Title}</h2>
								<h3>Year Release: {i.Year}</h3>
								<h3>Rating: {i.Rating} Stars</h3>
								<button onClick={() => handleDelete(i)} className="button">
									Delete
								</button>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}
