import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { getToken } from '../helpers/Auth.js'


const PlantAdd = () => {
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    sciName: '',
    origin: '',
    imageHome: '',
    description: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/plants', formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      navigate(`/plants/${data._id}`)
    } catch (err) {
      setErrors(err.response.data)
    }
  }



  return (
    <section className='form-page'>
    <form className='form-detail' onSubmit={handleSubmit} >
      <h1>Add Plant</h1>
      {/* Name */}
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' className='input' placeholder='Name' value={formData.name} onChange={handleChange} />
      {/* {errors && <p className = 'denied-text'>Please input username</p>} */}
      {/* Scientific name */}
      <label htmlFor='sciName'>Scientific name</label>
      <input type='text' name='sciName' className='input' placeholder='Scientific name' value={formData.sciName} onChange={handleChange} />

      {/* Origin */}
      <label htmlFor='origin'>Origin</label>
      <input type='text' name='origin' className='input' placeholder='Origin' value={formData.origin} onChange={handleChange} />
      {/* {errors && <p className = 'denied-text'>Please input email</p>} */}
      {/* Image */}
      <label htmlFor='imageHome'>Image</label>
      <input type='text' name='imageHome' className='input' placeholder='Image' value={formData.imageHome} onChange={handleChange} />
      {/* {errors && <p className = 'denied-text'>Please input password</p>} */}
      {/* Password Confirmation */}
      <label htmlFor='description'>Description</label>
      <textarea name='description' className='input' placeholder='Description' value={formData.description} onChange={handleChange} />
      {/* Submit */}
      <button type='submit'>Add</button>
    </form>
  </section>
  )
}

export default PlantAdd