import React from 'react'
import HomeBg from './HomeBg'
import InputCom from './InputCom'
import OutputCom from './OutputCom'

const Home = () => {
	return (
		<>
			<HomeBg />
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
