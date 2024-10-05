import React from 'react'
import {
	FiletypeJpg,
	Image,
	ImageAlt,
	Upload,
	Webcam,
	XLg,
} from 'react-bootstrap-icons'

export default function InputCom() {
	return (
		<>
			<div className='input_box'>
				<div className='input_img'>
					<div className='img_top_icons'>
						<Image size={30} className='top_icon' />
						<XLg size={30} className='top_icon' />
					</div>
					<div className='input_content'>
						<ImageAlt size={300} color='white' />
					</div>
				</div>
				<div className='input_functions'>
					<Upload size={30} className='input_f' />
					<Webcam size={30} className='input_f' />
					<FiletypeJpg size={30} className='input_f' />
				</div>
			</div>
			<div className='input_buttons'>
				<bututon className='btn btn-primary'>Submit</bututon>
				<bututon className='btn btn-primary'>Clear</bututon>
			</div>
		</>
	)
}
