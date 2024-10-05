import React, { useState } from 'react'
import { AspectRatio } from 'react-bootstrap-icons'

const DynamicProgressBar = ({ label, percentage, color }) => {
	return (
		<div style={{ marginBottom: '10px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					color: 'white',
					marginBottom: '5px',
				}}
			>
				<span>{label}</span>
				<span>{percentage}%</span>
			</div>
			<div className='progress' style={{ height: '2px' }}>
				<div
					className={`progress-bar ${color}`}
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

const ProgressBarComponent = () => {
	// Dynamic percentages and labels
	const [data, setData] = useState([
		{ label: 'something 1', percentage: 82, color: 'bg-warning' },
		{ label: 'something 2', percentage: 9, color: 'bg-secondary' },
		{ label: 'something 3', percentage: 20, color: 'bg-danger' },
		{ label: 'something 4', percentage: 12, color: 'bg-success' },
		{ label: 'something 5', percentage: 23, color: 'bg-green' },
		{ label: 'something 6', percentage: 52, color: 'bg-secondary' },
	])

	return (
		<div className='output_component'>
			<AspectRatio size={30} className='out_top' /> <h4>Result</h4>
			{data.map((item, index) => (
				<DynamicProgressBar
					key={index}
					label={item.label}
					percentage={item.percentage}
					color={item.color}
				/>
			))}
			{/* <button className='btn btn-primary output_afresh'>Afresh</button> */}
		</div>
	)
}

export default ProgressBarComponent
