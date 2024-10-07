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

const OutputCom = ({ result }) => {
	const [data, setData] = useState([])
	//
	useEffect(() => {
		if (result) {
			setData(result)
		}
	}, [result])

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
				<p style={{ color: 'white' }}>No data!. ): </p>
			)}
		</div>
	)
}

export default OutputCom
