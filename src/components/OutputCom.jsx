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

const OutputCom = ({ result, title, isitchest, correct }) => {
	// Use useState to store data
	const [data, setData] = useState([])

	// Update data when result changes
	useEffect(() => {
		if (result) {
			setData(result) // Set state using setData
		}
	}, [result])

	return (
		<>
			<div className='top_output'>
				<AspectRatio size={30} className='out_top' />
				<h4>Is It Chest</h4>
				{isitchest.length > 0 ? (
					isitchest.map((item, index) => (
						<DynamicProgressBar
							key={index}
							label={item.label}
							percentage={Math.round(item.confidence * 100)}
						/>
					))
				) : (
					<p style={{ color: 'white' }}>No picture selected.</p>
				)}
			</div>
			<div className='output_component'>
				<h4>{title}</h4>
				{correct && data.length > 0 ? (
					data.map((item, index) => (
						<DynamicProgressBar
							key={index}
							label={item.label}
							percentage={Math.round(item.confidence * 100)}
						/>
					))
				) : (
					<p style={{ color: 'white' }}>No data! ):</p>
				)}
			</div>
		</>
	)
}

export default OutputCom
