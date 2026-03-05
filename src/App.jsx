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
		setConvertedAmount(Number(amount) * currencyOptions[to]);
		console.log(currencyOptions[to]);
		console.log(typeof (amount));
		console.log(typeof (convertedAmount));
	}


	return (
		<>
			<main className='h-screen flex items-center justify-center' style={{ backgroundImage: "url(/bg-img.png)" }}>
				<div className='bg-green-800 px-20 py-15 flex flex-col gap-6 rounded-lg'>
					<div>
						<h1 className='text-5xl text-white'>Currency Converter</h1>
					</div>
					<form onSubmit={(e) => { e.preventDefault(); }} className='flex flex-col gap-4'>
						<div className='flex flex-col justify-center items-center gap-5.5'>
							<InputBox label="From" amount={amount} currency={from} currencyOptions={currencyOptions} onAmountChange={(amount) => (setAmount(amount))} />
							<button className='btn py-1 leading-none btn-primary absolute'>Swap</button>
							<InputBox label="To" amount={convertedAmount} currency={to} currencyOptions={currencyOptions} onAmountChange={(convertedAmount) => (setAmount(convertedAmount))} />
						</div>
						<input type="submit" className='btn outline-0 border-0 bg-green-600' onClick={convert} />
					</form>
				</div>
			</main>
		</>
	)
}

export default App
