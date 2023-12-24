import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Contact, Home, Menu, Wines } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/menu' element={<Menu />} />
			<Route path='/about' element={<About />} />
			<Route path='/wines' element={<Wines />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
}

export default App;
