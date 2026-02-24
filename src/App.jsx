import { useRef, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {
	const count = useRef(0);
	const [cnt, setCnt] = useState(0);

	const setCount = () => {
		count.current += 1;
		setCnt(() => count.current);
		console.log(count.current)
	}
	return (
		<>
			<main className='h-screen flex items-center justify-center' style={{ backgroundImage: "url(/bg-img.png)" }}>
				<div className='bg-green-800 px-20 py-15 flex flex-col gap-10 rounded-lg'>
					<div>
						<h1 className='text-5xl text-white'>Currency Converter</h1>
					</div>
					<form action="POST">
						<InputBox />
					</form>
				</div>
			</main>
		</>
	)
}

export default App
