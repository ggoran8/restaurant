import React from 'react';
import Layout from '../fragments/Layout';
import menuStyles from './Menu.module.css';

const Menu = () => {
	return (
		<Layout>
			<div className={menuStyles.container}>
				<div className={menuStyles.starters}>
					<h2 className={menuStyles.title}>Starters</h2>
					<ul className={menuStyles.list}>
						<li>Caprese Salad</li>
						<p>
							Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic
							glaze.
						</p>
						<li>Crispy Calamari</li>
						<p>
							Lightly breaded and fried calamari served with marinara sauce and
							lemon wedges.
						</p>
						<li>Roasted Red Pepper Hummus</li>
						<p>
							Creamy hummus blended with roasted red peppers, served with pita
							bread and cucumber slices.
						</p>
						<li>Shrimp Spring Rolls</li>
						<p>
							Delicate rice paper rolls filled with succulent shrimp, rice
							noodles, and crisp vegetables, served with a sweet chili dipping
							sauce.
						</p>
					</ul>
				</div>

				<div className={menuStyles.mainCourses}>
					<h2 className={menuStyles.title}>Main Courses</h2>
					<ul className={menuStyles.list}>
						<li>Grilled Salmon with Lemon-Dill Sauce</li>
						<p>
							Fresh salmon fillet grilled to perfection, topped with a zesty
							lemon-dill sauce, and served with sautéed asparagus.
						</p>
						<li>Vegetarian Stuffed Bell Peppers</li>
						<p>
							Bell peppers filled with a savory mixture of quinoa, black beans,
							corn, and spices, baked to perfection.
						</p>
						<li>Chicken Marsala</li>
						<p>
							Sautéed chicken breasts in a rich Marsala wine sauce with
							mushrooms, served with garlic mashed potatoes.
						</p>
						<li>Eggplant Parmesan</li>
						<p>
							Layers of breaded and baked eggplant slices topped with marinara
							sauce and melted mozzarella, served with spaghetti.
						</p>
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default Menu;
