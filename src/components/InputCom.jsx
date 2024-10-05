import React, { useRef, useState } from 'react'
import {
	FiletypeJpg,
	Image,
	ImageAlt,
	Upload,
	Webcam,
	XLg,
} from 'react-bootstrap-icons'

export default function InputCom({ setLoader }) {
	const fileInputRef = useRef(null)
	const [selectedImage, setSelectedImage] = useState(null)
	const [selectedFile, setSelectedFile] = useState(null)

	// Function to handle the click on the FiletypeJpg icon
	const handleFilePickerClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click() // Programmatically click the file input
		}
	}

	// Function to handle file selection
	const handleFileChange = event => {
		const file = event.target.files[0]
		if (file) {
			setSelectedFile(file) // Store the file for submission
			const reader = new FileReader()
			reader.onload = e => {
				setSelectedImage(e.target.result) // Set the image data URL to state
			}
			reader.readAsDataURL(file) // Convert file to data URL
		}
	}

	// Function to clear the selected image
	const clearImage = () => {
		setSelectedImage(null) // Reset the image state
		setSelectedFile(null) // Clear the file as well
		if (fileInputRef.current) {
			fileInputRef.current.value = '' // Reset the file input value
		}
	}

	// Function to handle image submission to the backend
	const handleSubmit = async () => {
		if (!selectedFile) {
			alert('Please select an image to submit.')
			return
		}

		// Create a FormData object and append the selected file
		const formData = new FormData()
		formData.append('image', selectedFile) // Use 'image' as the key, can be changed

		setLoader(true) // Set the loader

		try {
			// Send POST request to the backend
			const response = await fetch('https://your-backend-url.com/upload', {
				method: 'POST',
				body: formData, // Send formData with the file
			})

			if (response.ok) {
				console.log('Image uploaded successfully!')
				alert('Image uploaded successfully!')
			} else {
				console.error('Image upload failed')
				alert('Failed to upload image.')
			}
		} catch (error) {
			console.error('Error uploading image:', error)
			alert('An error occurred while uploading the image.')
		}
		setLoader(false) // Reset the loader when done
	}

	return (
		<>
			<div className='input_box'>
				<div className='input_img'>
					<div className='img_top_icons'>
						<Image size={30} className='top_icon is_input' />
						<XLg size={30} className='top_icon cancel' onClick={clearImage} />
					</div>
					<div className='input_content'>
						{selectedImage ? (
							<img src={selectedImage} alt='Selected' className='input_img' />
						) : (
							<ImageAlt size={300} color='white' />
						)}
					</div>
				</div>
				<div className='input_functions'>
					<Upload size={30} className='input_f' onClick={handleSubmit} />
					<Webcam size={30} className='input_f' />
					<FiletypeJpg
						size={30}
						className='input_f'
						onClick={handleFilePickerClick}
					/>
				</div>
			</div>
			<input
				type='file'
				accept='image/jpeg'
				style={{ display: 'none' }}
				ref={fileInputRef}
				onChange={handleFileChange}
			/>
			{/* <div className='input_buttons'>
				<button className='btn btn-primary' onClick={handleSubmit}>
					Submit
				</button>
				<button className='btn btn-primary' onClick={clearImage}>
					Clear
				</button>
			</div> */}
		</>
	)
}
