import React from 'react';
import App from '../pages/App';
import Favorites from '../pages/Favorites';
import UpdateFavorite from '../pages/UpdateFavorite';
import MovieShowPage from '../pages/MovieShowPage';

const routes = [
	{
		Component: UpdateFavorite,
		key: 'UpdateFavorite',
		path: '/:id/edit'
	},
	{
		Component: Favorites,
		key: 'Favorites',
		path: '/favorites'
	},
	{
		Component: MovieShowPage,
		key: 'MovieShowPage',
		path: '/:id'
	},
	{
		Component: App,
		key: 'Home',
		path: '/'
	}
];

export default routes;
