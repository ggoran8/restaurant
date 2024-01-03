import React from 'react';
import Layout from '../fragments/Layout';
import wineStyles from './Wines.module.css';

const Wines = () => {
	return (
		<Layout>
			<div>
				<div className={wineStyles.leftSide}>
					<h2 className={wineStyles.title}>Red Wines</h2>
					<ul className={wineStyles.list}>
						<li>Cabernet Sauvignon</li>
						<li>Merlot</li>
						<li>Pinot Noir</li>
						<li>Malbec</li>
						<li>Syrah/Shiraz</li>
						<li>Zinfandel</li>
						<li>Tempranillo</li>
						<li>Sangiovese</li>
						<li>Grenache</li>
						<li>Petite Sirah</li>
					</ul>
				</div>

				<div className={wineStyles.rightSide}>
					<div className={wineStyles.rightSideText}>
						<h2 className={wineStyles.title}>White Wines</h2>
						<ul className={wineStyles.list}>
							<li>Chardonnay</li>
							<li>Sauvignon Blanc</li>
							<li>Riesling</li>
							<li>Pinot Grigio/Pinot Gris</li>
							<li>Chenin Blanc</li>
							<li>Gewürztraminer</li>
							<li>Viognier</li>
							<li>Albariño</li>
							<li>Grüner Veltliner</li>
							<li>Vermentino</li>
						</ul>
					</div>
				</div>

				<div className={wineStyles.leftSide}>
					<h2 className={wineStyles.title}>Rosé Wines</h2>
					<ul className={wineStyles.list}>
						<li>Provence Rosé</li>
						<li>White Zinfandel</li>
						<li>Grenache Rosé</li>
						<li>Sangiovese Rosé</li>
						<li>Tempranillo Rosé</li>
						<li>Syrah/Shiraz Rosé</li>
						<li>Pinot Noir Rosé</li>
						<li>Cabernet Sauvignon Rosé</li>
					</ul>
				</div>

				<div className={wineStyles.rightSide}>
					<div className={wineStyles.rightSideText}>
						<h2 className={wineStyles.title}>Sparkling Wines</h2>
						<ul className={wineStyles.list}>
							<li>Champagne</li>
							<li>Prosecco</li>
							<li>Cava</li>
							<li>Sparkling Rosé</li>
							<li>Moscato d'Asti</li>
						</ul>
					</div>
				</div>

				<div className={wineStyles.leftSide}>
					<h2 className={wineStyles.title}>Dessert Wines</h2>
					<ul className={wineStyles.list}>
						<li>Port</li>
						<li>Sherry</li>
						<li>Sauternes</li>
						<li>Ice Wine</li>
						<li>Late Harvest Riesling</li>
					</ul>
				</div>

				<div className={wineStyles.rightSide}>
					<div className={wineStyles.rightSideText}>
						<h2 className={wineStyles.title}>Fortified Wines</h2>
						<ul className={wineStyles.list}>
							<li>Port</li>
							<li>Sherry</li>
							<li>Madeira</li>
							<li>Marsala</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Wines;
