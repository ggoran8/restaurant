import React from 'react';
import Header from '../components/header/Header';

const Layout = (props) => {
	return (
		<div className='container'>
			<Header />
			<div className='mainContainer'>
				<main className='main'>{props.children}</main>
			</div>
		</div>
	);
};

export default Layout;
