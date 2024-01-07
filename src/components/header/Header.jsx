import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import rest from '../assets/pictures/rest.webp';
import headerStyles from './Header.module.css';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';
import { ReactComponent as Circle } from '../assets/icons/circle.svg';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((open) => !open);
	};

	return (
		<header>
			<div className={headerStyles.sideHeader}>
				<div className={headerStyles.imageContainer}>
					<Link to='/'>
						<img src={rest} alt='Restaurant' />
					</Link>
				</div>
				<nav>
					<ul>
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
					</ul>
				</nav>
				<div>
					<ul className={headerStyles.secondList}>
						<li className={headerStyles.listItemIcons}>
							<a href='https://github.com/ggoran8' target='blank'>
								<Github />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a href='mailto:gorangajsek22@gmail.com'>
								<Mail />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a href='https://twitter.com/omnity_gg' target='blank'>
								<Twitter className={headerStyles.test} />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a
								href='https://www.linkedin.com/in/goran-gaj%C5%A1ek-2064382a7/'
								target='blank'
							>
								<Linkedin />
							</a>
						</li>
					</ul>
				</div>

				<small className={headerStyles.smallText}>Made by Goran</small>
			</div>

			<nav
				className={`${headerStyles.mobileNav} ${
					isOpen ? headerStyles.is_open : ''
				}`}
				onClick={toggleMenu}
			>
				<ul>
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
				</ul>
				<div className={headerStyles.secondListContainer}>
					<ul className={headerStyles.secondList}>
						<li className={headerStyles.listItemIcons}>
							<a
								className={headerStyles.secondListLink}
								href='https://github.com/ggoran8'
								target='blank'
							>
								<Github />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a
								className={headerStyles.secondListLink}
								href='mailto:gorangajsek22@gmail.com'
							>
								<Mail />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a
								className={headerStyles.secondListLink}
								href='https://twitter.com/omnity_gg'
								target='blank'
							>
								<Twitter />
							</a>
						</li>
						<li className={headerStyles.listItemIcons}>
							<a
								className={headerStyles.secondListLink}
								href='https://www.linkedin.com/in/goran-gaj%C5%A1ek-2064382a7/'
								target='blank'
							>
								<Linkedin />
							</a>
						</li>
					</ul>

					<small className={headerStyles.smallText}>Made by Goran</small>
				</div>
			</nav>

			<button
				className={`${headerStyles.hamburger} ${
					isOpen ? headerStyles.is_active : ''
				}`}
				onClick={toggleMenu}
			>
				<div className={headerStyles.bar}></div>
			</button>
		</header>
	);
};

export default Header;
