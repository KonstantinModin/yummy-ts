import React from 'react';
import useData from './hooks/useData';
import './App.css';

const App = () => {
	const [loading, data, error] = useData();

	console.table({ loading, data, error });
	return (
		<div className="App">
			<header className="App-header">
				Menu
			</header>

		</div>
	);
}

export default App;
