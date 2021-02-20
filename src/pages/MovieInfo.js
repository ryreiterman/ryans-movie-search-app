import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export default function MovieInfo(props) {
	return (
		<div className="flex flex-wrap flex-1 overflow-hidden justify-center bg-gray-200">
			{props.movie.Search.map(i => {
				return (
					<div
						key={i.imdbID}
						className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 bg-white border-2 border-black rounded-md mt-1 ml-1 flex flex-col"
					>
						<img
							className="rounded w-full flex-grow object-cover align-middle"
							src={i.Poster}
							alt="Movie poster"
						/>

						<h3 className="text-xl my-2">{i.Title}</h3>
						<h4>Year Released: {i.Year}</h4>
						{/* <h4>Rating: {i.Rating} Stars</h4> */}

						<button
							onClick={() => props.handleSubmitFavorite(i)}
							className="border border-gray-500 p-2 transition duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-400 block mt-auto"
						>
							Add to Favorites
						</button>
					</div>
				);
			})}
		</div>
	);
}
