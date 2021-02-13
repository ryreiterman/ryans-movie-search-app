import React from 'react';

export default function MovieInfo(props) {
	return (
		<div className="grid-wrapper">
			{props.movie.Search.map(i => {
				return (
					<div key={i.imdbID} className="grid-item">
						<img src={i.Poster} />

						<h2>Title: {i.Title}</h2>
						<h3>Year Release: {i.Year}</h3>
						{/* <h4>ID: {i.imdbID}</h4> */}

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
