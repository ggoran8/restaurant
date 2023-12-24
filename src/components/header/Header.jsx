import React from 'react';
import { NavLink } from 'react-router-dom';
import space from '../assets/pictures/space.jpg';

const Header = () => {
	return (
		<header>
			<div>
				<img src={space} alt='' />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink>Home</NavLink>
					</li>
					<li>
						<NavLink>Menu</NavLink>
					</li>
					<li>
						<NavLink>About</NavLink>
					</li>
					<li>
						<NavLink>Wines</NavLink>
					</li>
					<li>
						<NavLink>Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
