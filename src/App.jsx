import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {


	return (
		<>
			<main className='h-screen flex items-center justify-center' style={{ backgroundImage: "url(/bg-img.png)" }}>
				<div className='bg-white px-20 py-15'>
					<div>
						<h1 className='text-5xl text-green-700'>Currency Converter</h1>
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
