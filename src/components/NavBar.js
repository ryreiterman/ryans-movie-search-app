import React from 'react';
import { Link } from 'react-router-dom';

// const NavBar = props => {
// 	return (
// 		<nav className="nav-bar">
// 			{props.routes.map(({ key, path }) => (
// 				<Link key={key} to={path}>
// 					{key}
// 				</Link>
// 			))}
// 		</nav>
// 	);
// };
const NavBar = props => {
	return (
		<nav className="flex flex-row-reverse justify-center bg-blue-700 text-yellow-400 space-x-4 space-x-reverse p-4">
			{props.routes
				.filter(item => !item.path.includes(':'))
				.map(({ key, path }) => (
					<Link key={key} to={path}>
						{key}
					</Link>
				))}
		</nav>
	);
};
export default NavBar;
