import React from 'react';
import Spinner from './Spinner';
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
			<Spinner />

		</div>
	);
}

export default App;
