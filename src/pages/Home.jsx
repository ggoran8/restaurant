import React from 'react';
import Layout from '../fragments/Layout';
import homeStyles from './Home.module.css';
import space from '../components/assets/pictures/space.jpg';

const Home = () => {
	return (
		<Layout>
			<div>
				<h1 className={homeStyles.title}>Welcome to [Restaurant Name]!</h1>
				<p className={homeStyles.titleParagraph}>
					Nestled in the heart of [City/Area], our restaurant is a haven for
					those who appreciate the art of fine dining. From the moment you step
					through our doors, you are greeted with an ambiance that marries
					sophistication with comfort, setting the stage for an unforgettable
					dining experience. Our menu is a symphony of flavors, carefully
					composed by our talented chefs who draw inspiration from global
					culinary traditions. Every dish is a work of art, a testament to our
					commitment to using the freshest, locally sourced ingredients. Whether
					you're here for a casual lunch, a romantic dinner, or a special
					celebration, we invite you to savor the moments, the company, and the
					extraordinary flavors that define [Restaurant Name]. Join us and
					embark on a culinary journey that transcends the ordinary, where each
					bite tells a story of craftsmanship and passion. Welcome to a place
					where dining is not just a meal; it's an experience.
				</p>
				<div className={homeStyles.imageContainer}>
					<img className={homeStyles.foodImages} src={space} alt='' />
					<img className={homeStyles.foodImages} src={space} alt='' />
					<img className={homeStyles.foodImages} src={space} alt='' />
					<img className={homeStyles.foodImages} src={space} alt='' />
					<img className={homeStyles.foodImages} src={space} alt='' />
					<img className={homeStyles.foodImages} src={space} alt='' />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
