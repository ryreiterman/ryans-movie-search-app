import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites(props) {
	const [favorite, setFavorite] = useState({});

	// pull blog based on ID
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/favorites/${props.match.params.id}`);
				console.log(`${props.match.params.id}`);
				const data = await response.json();
				setFavorite(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="favorites-page">
			{/* <img src={i.Poster} /> */}

			<h2>{favorite.Title ? favorite.Title : ''}</h2>
			<h3>{favorite.Year ? favorite.Year : ''}</h3>
		</div>
	);
}
