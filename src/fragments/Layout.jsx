import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = (props) => {
	return (
		<div className='container'>
			<Header />
			<div className='mainContainer'>
				<main className='main'>{props.children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
