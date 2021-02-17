import React, { useState, useEffect, useRef } from 'react';

export default function UpdateFavorite(props) {
	const [favorite, setFavorite] = useState({
		Rating: ''
	});

	const ratingInput = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/favorites/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					Rating: ratingInput.current.value
				})
			});

			const data = await response.json();
			setFavorite(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/favorites');
		}
	};

	return (
		<div>
			{/* <h1>{favorite.Rating ? favorite.Rating : ''}</h1> */}

			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					{/* {' '}
					Rating:{' '} */}
					<input type="text" ref={ratingInput} defaultValue={favorite.Rating} />
				</label>
				<input type="submit" value="Update Favorite" />
			</form>
		</div>
	);
}
