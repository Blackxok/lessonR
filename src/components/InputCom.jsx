import React, { useRef, useState } from 'react'
import { FiletypeJpg, Image, ImageAlt, Upload, Virus, Webcam, XLg } from 'react-bootstrap-icons'

export default function InputCom({ setLoader, setResult }) {
  const fileInputRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [activeApi, setActiveApi] = useState('api1')

  const handleFilePickerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    setSelectedImage(null)
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setResult(null)
  }

  const handleSubmit = async () => {
		setActiveApi((prevApi) => (prevApi === 'api1' ? 'api2' : 'api1'))
    if (!selectedFile) {
      alert('Please select an image to submit.')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)

    setLoader(true)

    try {
      const apiUrl =
        activeApi === 'api1' ? 'http://149.28.56.114/image' : 'http://149.28.56.114/iscovid'

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        setResult(result)
      } else {
        const errorResult = await response.json()
        console.log(`Failed: ${errorResult.message || 'Error'}`)
      }
    } catch (error) {
      console.error('An error occurred:', error)
      console.log('An error occurred while uploading the image.')
    }
    setLoader(false)
  }

  return (
    <>
      <div className="input_box">
        <div className="input_img">
          <div className="img_top_icons">
            <Image size={30} className="top_icon is_input" />
            <XLg size={30} className="top_icon cancel" onClick={clearImage} />
          </div>
          <div className="input_content">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className="input_img" />
            ) : (
              <ImageAlt size={300} color="white" />
            )}
          </div>
        </div>
        <div className="input_functions">
          <Upload size={30} className="input_f" onClick={handleSubmit} />
          <Webcam size={30} className="input_f" />
          <FiletypeJpg size={30} className="input_f" onClick={handleFilePickerClick} />
					<Virus size={30} className="input_f" onClick={handleSubmit} />
        </div>
      </div>
      <input
        type="file"
        accept="image/jpeg"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  )
}