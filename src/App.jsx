import './App.css'

function App() {
	const activate = function (e) {
		const btns = document.querySelectorAll('.btn')
		// console.log('Button clicked')
		// console.log(e) // Button element
		// console.log(e.target.innerText) // Text content of the button
		// console.log(e.target.className) // Class name of the button
		btns.forEach(btn => btn.classList.remove('active'))
		e.target.classList.add('active')
	}
	return (
		<>
			<h1>Assalomu alekum</h1>
			<button className='btn btn-primary m-2 active' onClick={activate}>
				Click me
			</button>
			<button className='btn btn-primary m-2' onClick={activate}>
				Click me
			</button>
			<button className='btn btn-primary m-2' onClick={activate}>
				Click me
			</button>
		</>
	)
}

export default App
