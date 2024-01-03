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
						<p className={menuStyles.paragraph}>
							Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic
							glaze.
						</p>
						<li>Crispy Calamari</li>
						<p className={menuStyles.paragraph}>
							Lightly breaded and fried calamari served with marinara sauce and
							lemon wedges.
						</p>
						<li>Roasted Red Pepper Hummus</li>
						<p className={menuStyles.paragraph}>
							Creamy hummus blended with roasted red peppers, served with pita
							bread and cucumber slices.
						</p>
						<li>Shrimp Spring Rolls</li>
						<p className={menuStyles.paragraph}>
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
						<p className={menuStyles.paragraph}>
							Fresh salmon fillet grilled to perfection, topped with a zesty
							lemon-dill sauce, and served with sautéed asparagus.
						</p>
						<li>Vegetarian Stuffed Bell Peppers</li>
						<p className={menuStyles.paragraph}>
							Bell peppers filled with a savory mixture of quinoa, black beans,
							corn, and spices, baked to perfection.
						</p>
						<li>Chicken Marsala</li>
						<p className={menuStyles.paragraph}>
							Sautéed chicken breasts in a rich Marsala wine sauce with
							mushrooms, served with garlic mashed potatoes.
						</p>
						<li>Eggplant Parmesan</li>
						<p className={menuStyles.paragraph}>
							Layers of breaded and baked eggplant slices topped with marinara
							sauce and melted mozzarella, served with spaghetti.
						</p>
					</ul>
				</div>

				<div className={menuStyles.starters}>
					<h2 className={menuStyles.title}>Side dishes</h2>
					<ul className={menuStyles.list}>
						<li>Garlic Parmesan Roasted Brussels Sprouts</li>
						<p className={menuStyles.paragraph}>
							Brussels sprouts roasted to perfection with garlic, Parmesan
							cheese, and a hint of lemon, creating a savory and satisfying
							side.
						</p>
						<li>Truffle Parmesan Fries</li>
						<p className={menuStyles.paragraph}>
							Crispy golden fries tossed with truffle oil, Parmesan cheese, and
							fresh parsley, adding a touch of luxury to a classic favorite.
						</p>
						<li>Quinoa Pilaf with Roasted Vegetables</li>
						<p className={menuStyles.paragraph}>
							Fluffy quinoa combined with a medley of roasted vegetables, such
							as carrots, bell peppers, and zucchini, seasoned to perfection.
						</p>
						<li>Bacon-Wrapped Asparagus Bundles</li>
						<p className={menuStyles.paragraph}>
							Tender asparagus spears wrapped in smoky bacon and roasted until
							the bacon is crispy, creating a delightful combination of flavors
							and textures.
						</p>
					</ul>
				</div>

				<div className={menuStyles.mainCourses}>
					<h2 className={menuStyles.title}>Desserts</h2>
					<ul className={menuStyles.list}>
						<li>Classic Tiramisu</li>
						<p className={menuStyles.paragraph}>
							Layers of espresso-soaked ladyfingers and mascarpone cream, dusted
							with cocoa powder.
						</p>
						<li>Molten Lava Cake</li>
						<p className={menuStyles.paragraph}>
							Warm chocolate cake with a gooey, molten center, served with a
							scoop of vanilla ice cream.
						</p>
						<li>Mixed Berry Cheesecake</li>
						<p className={menuStyles.paragraph}>
							Creamy cheesecake topped with a medley of fresh berries and a
							raspberry coulis.
						</p>
						<li>Pistachio Crème Brûlée</li>
						<p className={menuStyles.paragraph}>
							Silky pistachio-infused custard with a caramelized sugar crust.
						</p>
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default Menu;
