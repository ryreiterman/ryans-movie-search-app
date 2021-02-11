import React from 'react';
import App from '../pages/App';
import Favorites from '../pages/Favorites';

const routes = [
	{
		Component: Favorites,
		key: 'Favorites',
		path: '/favorites'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
