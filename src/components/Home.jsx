import React, { useState } from 'react'
import InputCom from './InputCom'
import OutputCom from './OutputCom'

const Home = () => {
	const [loader, setLoader] = useState(false)
	const [result, setResult] = useState(null)

	return (
		<>
			<div className='container home'>
				<div className='column'>
					<InputCom setLoader={setLoader} setResult={setResult} />
				</div>
				{loader && (
					<div className='column loader_col'>
						<div className='loader_container'>
							<div className='spinner-border loader' role='status'></div>
						</div>
					</div>
				)}
				<div className='column'>
					<OutputCom result={result} />
				</div>
			</div>
		</>
	)
}

export default Home
