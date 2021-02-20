import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UpdateFavorite from './UpdateFavorite';
import 'tailwindcss/tailwind.css';

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
			<h1 className="text-4xl text-center p-2">Favorite Movies</h1>
			<div className="flex flex-wrap justify-center bg-gray-200 -mx-2 mt-6">
				{favorite.map(i => {
					return (
						<div
							key={i._id}
							className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 m-1 bg-white border border-gray-500 rounded-md"
						>
							<img
								src={i.Poster}
								className="rounded h-2/3 w-full object-cover align-middle"
							/>
							<Link to={`/${i._id}`}>
								<h3 className="text-xl my-2">{i.Title}</h3>
							</Link>
							<h4>Rating: {i.Rating} Stars</h4>
							<button
								onClick={() => handleDelete(i)}
								className="border border-gray-500 p-2 mr-2 mt-1"
							>
								Delete
							</button>
							<Link to={`/${i._id}/edit`}>
								<button className="border border-gray-500 p-2 mt-1">
									Rate It!
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);
}
