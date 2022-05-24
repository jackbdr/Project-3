import axios from 'axios'

const ImageUpload = ({ formData, setFormData }) => {

  const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
  const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

  console.log(uploadURL, preset)

  const handleImageUpload = async e => {
    // Create form data to send in the API request to cloudinary
    // To do it we're going to use the FormData constructor from javascript
    const data = new FormData()
    
    // Once created we're going to append the files that were uploaded to the FormData
    data.append('file', e.target.files[0])
    data.append('upload_preset', preset)
    // Once we've done this, the data is ready to send, and we'll use the upload url to do it
    const res = await axios.post(uploadURL, data)

    console.log('data', res.data)
    // Set the profileImage url to state
    setFormData({ ...formData, imageTrans: res.data.url })
  }

  return (
        <>
          <label htmlFor="imageTrans" className="checkbox label">Transparent image upload</label>
          <input
            name="imageTrans"
            className="input"
            type="file"
            onChange={handleImageUpload}
          />
        </>
  
  )
}

export default ImageUpload