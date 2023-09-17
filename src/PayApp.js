import { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';
import contributeImage from './public/contribute.png';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Raise "Points"</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>As much $ as you want</h3>
					<img src={contributeImage} alt='Contribute' />
					<button onClick={() => setShowItem(true)}>Contribute</button>
				</>
			)}
		</div>
	);
}

export default App;
