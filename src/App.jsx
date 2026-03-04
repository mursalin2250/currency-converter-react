import { useRef, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
	
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("bdt");
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(from);

	const currencyOptions = Object.keys(currencyInfo);

	const convert = () => {
		setConvertedAmount(amount * currencyOptions[to]);
	}

	
	return (
		<>
			<main className='h-screen flex items-center justify-center' style={{ backgroundImage: "url(/bg-img.png)" }}>
				<div className='bg-green-800 px-20 py-15 flex flex-col gap-6 rounded-lg'>
					<div>
						<h1 className='text-5xl text-white'>Currency Converter</h1>
					</div>
					<form onSubmit={(e) => {e.preventDefault();}}>
						<InputBox label="From" amount={amount} currency={from} currencyOption={currencyOptions} onAmountChange={(amount) => (setAmount(amount))} />
						<InputBox label="To" amount={convertedAmount} currency={to} currencyOption={currencyOptions} onAmountChange={(convertedAmount) => (setAmount(convertedAmount))}/>
						<input type="submit" onClick={convert}/>
					</form>
				</div>
			</main>
		</>
	)
}

export default App
