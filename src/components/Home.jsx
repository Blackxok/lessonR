import React from 'react'
import InputCom from './InputCom'
import OutputCom from './OutputCom'

const Home = () => {
	return (
		<>
			<div className='container home'>
				<div className='column'>
					<InputCom />
				</div>
				<div className='column'>
					<OutputCom />
				</div>
			</div>
		</>
	)
}

export default Home
