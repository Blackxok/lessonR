import React, { useEffect, useState } from 'react'
import { AspectRatio } from 'react-bootstrap-icons'

const DynamicProgressBar = ({ label, percentage }) => {
	return (
		<div className='progress_container'>
			<div className='progress_bar'>
				<span>{label}</span>
				<span>{percentage}%</span>
			</div>
			<div className='progress'>
				<div
					className='progress-bar bg-green'
					role='progressbar'
					style={{ width: `${percentage}%` }}
					aria-valuenow={percentage}
					aria-valuemin='0'
					aria-valuemax='100'
				></div>
			</div>
		</div>
	)
}

<<<<<<< HEAD
const OutputCom = ({ result, secondResult, toggle }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		if (toggle && secondResult) {
			setData(secondResult)
		} else if (result) {
			setData(result)
		}
	}, [result, secondResult, toggle])
=======
const OutputCom = ({ result }) => {
	const [data, setData] = useState([])
	//
	useEffect(() => {
		if (result) {
			setData(result)
		}
	}, [result])
>>>>>>> 77f9d13a4625a619e654fe2d390adf23a65dddf8

	return (
		<div className='output_component'>
			<AspectRatio size={30} className='out_top' /> <h4>Result</h4>
			{data.length > 0 ? (
				data.map((item, index) => (
					<DynamicProgressBar
						key={index}
						label={item.label}
						percentage={item.confidence * 100}
					/>
				))
			) : (
<<<<<<< HEAD
				<p style={{ color: 'white' }}>No data! ): </p>
=======
				<p style={{ color: 'white' }}>No data!. ): </p>
>>>>>>> 77f9d13a4625a619e654fe2d390adf23a65dddf8
			)}
		</div>
	)
}

<<<<<<< HEAD
export default OutputCom
=======
export default OutputCom
>>>>>>> 77f9d13a4625a619e654fe2d390adf23a65dddf8
