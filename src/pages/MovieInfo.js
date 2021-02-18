import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export default function MovieInfo(props) {
	return (
		<div className="flex flex-wrap justify-center bg-gray-200 -mx-2 mt-6">
			{props.movie.Search.map(i => {
				return (
					<div
						key={i.imdbID}
						className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1 m-1 bg-white border border-gray-500 rounded-sm"
					>
						<img
							className="rounded h-445px w-full object-cover align-middle"
							src={i.Poster}
							alt="Movie poster"
						/>

						<h3>{i.Title}</h3>
						<h4>Year Released: {i.Year}</h4>
						{/* <h4>Rating: {i.Rating} Stars</h4> */}

						<button
							onClick={() => props.handleSubmitFavorite(i)}
							className="button"
						>
							Add to Favorites
						</button>
					</div>
				);
			})}
		</div>
	);
}
