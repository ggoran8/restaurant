import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import space from '../assets/pictures/space.jpg';
import headerStyles from './Header.module.css';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';
import { ReactComponent as Circle } from '../assets/icons/circle.svg';

const Header = () => {
	return (
		<header>
			<div className={headerStyles.sideHeader}>
				<div className={headerStyles.imageContainer}>
					<Link to='/'>
						<img src={space} alt='' />
					</Link>
				</div>
				<nav>
					<ul className={headerStyles.firstNavList}>
						<li className={headerStyles.listItem}>
							<Circle className={headerStyles.circle} />
							<NavLink className={headerStyles.listItemText} to='/'>
								Home
							</NavLink>
						</li>
						<li className={headerStyles.listItem}>
							<Circle className={headerStyles.circle} />
							<NavLink className={headerStyles.listItemText} to='/menu'>
								Menu
							</NavLink>
						</li>
						<li className={headerStyles.listItem}>
							<Circle className={headerStyles.circle} />
							<NavLink className={headerStyles.listItemText} to='/about'>
								About
							</NavLink>
						</li>
						<li className={headerStyles.listItem}>
							<Circle className={headerStyles.circle} />
							<NavLink className={headerStyles.listItemText} to='/wines'>
								Wines
							</NavLink>
						</li>
						<li className={headerStyles.listItem}>
							<Circle className={headerStyles.circle} />
							<NavLink className={headerStyles.listItemText} to='/contact'>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
				<div>
					<ul className={headerStyles.secondList}>
						<li className={headerStyles.listItemIcons}>
							<a href='https://github.com/gorangg96'>
								<Github />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a href='mailto:gorangajsek22@gmail.com'>
								<Mail />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a href='mailto:gorangajsek22@gmail.com'>
								<Twitter className={headerStyles.test} />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a href='mailto:gorangajsek22@gmail.com'>
								<Linkedin />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
