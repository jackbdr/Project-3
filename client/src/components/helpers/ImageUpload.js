import axios from 'axios'
import Form from 'react-bootstrap/Form'

const ImageUpload = ({ formData, setFormData }) => {

  const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
  const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

  console.log(uploadURL, preset)

  const handleImageUpload1 = async e => {
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

  const handleImageUpload2 = async e => {
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
    setFormData({ ...formData, imageHome: res.data.url })
  }

  const handleImageUpload3 = async e => {
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
    setFormData({ ...formData, imageWild: res.data.url })
  }

  return (
    <>
      <Form.Group classname='upload'>
        <label htmlFor="imageTrans" className="checkbox label">* Transparent image upload</label>
        <input
          name="imageTrans"
          className="input"
          type="file"
          onChange={handleImageUpload1}
        />
      </Form.Group>
      <Form.Group classname='upload'>
        <label htmlFor="imageHome" className="checkbox label">Houseplant image upload</label>
        <input
          name="imageHome"
          className="input"
          type="file"
          onChange={handleImageUpload2}
        />
      </Form.Group>
      <Form.Group classname='upload'>
        <label htmlFor="imageWild" className="checkbox label">Wild image upload</label>
        <input
          name="imageWild"
          className="input"
          type="file"
          onChange={handleImageUpload3}
        />
      </Form.Group>
    </>
  )
}

export default ImageUpload