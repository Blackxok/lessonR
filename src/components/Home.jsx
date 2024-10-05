import React, { useState } from 'react'
import InputCom from './InputCom'
import OutputCom from './OutputCom'

const Home = () => {
	const [loader, setLoader] = useState(false)

	return (
		<>
			<div className='container home'>
				<div className='column'>
					<InputCom setLoader={setLoader} />
				</div>
				{loader && (
					<div className='column loader_col'>
						<div className='loader_container'>
							<div class='spinner-border loader' role='status'></div>
						</div>
					</div>
				)}
				<div className='column'>
					<OutputCom />
				</div>
			</div>
		</>
	)
}

export default Home
