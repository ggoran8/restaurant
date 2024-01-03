import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import rest from '../assets/pictures/rest.webp';
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
						<img src={rest} alt='Restaurant' />
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

				<small>Made by Goran</small>
			</div>
			<div className={headerStyles.mobileNav}>
				<nav>
					<ul className={headerStyles.mobileNavList}>
						<li className={headerStyles.mobileNavlistItem}>
							<Circle className={headerStyles.mobileNavcircle} />
							<NavLink className={headerStyles.mobileNavlistItemText} to='/'>
								Home
							</NavLink>
						</li>
						<li className={headerStyles.mobileNavmobileNavlistItem}>
							<Circle className={headerStyles.mobileNavcircle} />
							<NavLink
								className={headerStyles.mobileNavlistItemText}
								to='/menu'
							>
								Menu
							</NavLink>
						</li>
						<li className={headerStyles.mobileNavlistItem}>
							<Circle className={headerStyles.mobileNavcircle} />
							<NavLink
								className={headerStyles.mobileNavlistItemText}
								to='/about'
							>
								About
							</NavLink>
						</li>
						<li className={headerStyles.mobileNavlistItem}>
							<Circle className={headerStyles.mobileNavcircle} />
							<NavLink
								className={headerStyles.mobileNavlistItemText}
								to='/wines'
							>
								Wines
							</NavLink>
						</li>
						<li className={headerStyles.mobileNavlistItem}>
							<Circle className={headerStyles.mobileNavcircle} />
							<NavLink
								className={headerStyles.mobileNavlistItemText}
								to='/contact'
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
				<div>
					<ul className={headerStyles.mobileNavsecondList}>
						<li className={headerStyles.mobileNavlistItemIcons}>
							<a href='https://github.com/ggoran8' target='blank'>
								<Github />
							</a>
						</li>
						<li className={headerStyles.mobileNavlistItemIcons}>
							<a href='mailto:gorangajsek22@gmail.com'>
								<Mail />
							</a>
						</li>
						<li className={headerStyles.mobileNavlistItemIcons}>
							<a href='https://twitter.com/omnity_gg' target='blank'>
								<Twitter className={headerStyles.test} />
							</a>
						</li>
						<li className={headerStyles.mobileNavlistItemIcons}>
							<a
								href='https://www.linkedin.com/in/goran-gaj%C5%A1ek-2064382a7/'
								target='blank'
							>
								<Linkedin />
							</a>
						</li>
					</ul>
				</div>

				<small>Made by Goran</small>
			</div>
		</header>
	);
};

export default Header;
