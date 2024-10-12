import React, { useState } from 'react'
import InputCom from './InputCom'
import OutputCom from './OutputCom'

const Home = () => {
	const [loader, setLoader] = useState(false)
	const [result, setResult] = useState(null)
	const [title, setTitle] = useState('Result')
	const [isitchest, setIsitchest] = useState(false)
	const [correct, setCorrect] = useState(null)

	return (
		<>
			<div className='container home'>
				<div className='column'>
					<InputCom
						setLoader={setLoader}
						setResult={setResult}
						setTitle={setTitle}
						setIsitchest={setIsitchest}
						setCorrect={setCorrect}
					/>
				</div>
				{loader && (
					<div className='column loader_col'>
						<div className='loader_container'>
							<div className='spinner-border loader' role='status'></div>
						</div>
					</div>
				)}
				<div className='column'>
					<OutputCom result={result} title={title} isitchest={isitchest} correct={correct}/>
				</div>
			</div>
		</>
	)
}

export default Home
