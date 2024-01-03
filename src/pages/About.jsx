import React from 'react';
import Layout from '../fragments/Layout';
import aboutStyles from './About.module.css';

const About = () => {
	return (
		<Layout>
			<div className={aboutStyles.container}>
				<h2 className={aboutStyles.title}>About us</h2>
				<p className={aboutStyles.paragraph}>
					<p>
						Welcome to Gorans', a culinary sanctuary born from a passion for
						exceptional dining. Nestled in the heart of Zagreb, our journey
						began with a simple yet profound belief – that a memorable meal is
						not just about the food, but about the entire experience.
					</p>
					<br />
					<p>
						At Gorans', we strive to create an environment where artful cuisine
						meets genuine hospitality. Our team of skilled chefs, driven by
						creativity and dedication, carefully curates a menu that blends
						traditional flavors with modern flair. Each dish is a reflection of
						our commitment to quality, sourcing only the finest local
						ingredients to ensure an unforgettable dining adventure.
					</p>
					<br />
					<p>
						Beyond the kitchen, Gorans' is a place where connections are forged,
						and stories unfold. Our inviting ambiance and attentive service
						invite you to linger, to savor, and to appreciate the moments that
						make dining an experience, not just a meal.
					</p>
					<br />
					<p>
						We take pride in our roots, embracing sustainable practices and
						community engagement to contribute to the vibrant tapestry of
						Zagreb. Join us at Gorans', where every visit is an opportunity to
						explore, indulge, and create cherished memories.
					</p>
					<br />
					<p>
						Thank you for being a part of our story. We look forward to
						welcoming you to our table.
					</p>
				</p>
			</div>
		</Layout>
	);
};

export default About;
