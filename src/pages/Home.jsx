import React from 'react';
import Layout from '../fragments/Layout';
import homeStyles from './Home.module.css';
import burger from '../components/assets/pictures/burger.jpeg';
import cake from '../components/assets/pictures/cake.jpeg';
import fruit from '../components/assets/pictures/fruit.jpeg';
import noodles from '../components/assets/pictures/noodles.jpeg';
import pancakes from '../components/assets/pictures/pancakes.jpeg';
import soup from '../components/assets/pictures/soup.jpeg';

const Home = () => {
	return (
		<Layout>
			<div className={homeStyles.container}>
				<h1 className={homeStyles.title}>Welcome to Gorans'!</h1>
				<p className={homeStyles.titleParagraph}>
					Welcome to Gorans', where every dish is a masterpiece. Immerse
					yourself in a world of exquisite flavors and warm hospitality. Whether
					it's a casual lunch or a special celebration, our menu invites you to
					savor the extraordinary. Join us for an unforgettable dining
					experience.
				</p>
				<div className={homeStyles.imageContainer}>
					<img className={homeStyles.foodImages} src={pancakes} alt='' />
					<img className={homeStyles.foodImages} src={burger} alt='' />
					<img className={homeStyles.foodImages} src={cake} alt='' />
					<img className={homeStyles.foodImages} src={fruit} alt='' />
					<img className={homeStyles.foodImages} src={noodles} alt='' />
					<img className={homeStyles.foodImages} src={soup} alt='' />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
