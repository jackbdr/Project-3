import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { getToken } from '../helpers/Auth.js'


const PlantAdd = () => {
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    sciname: '',
    origin: '',
    image: '',
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
    <form className='form-detail'>
      <h1>Add Plant</h1>
      {/* Name */}
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' className='input' placeholder='Name' />
      {/* {errors && <p className = 'denied-text'>Please input username</p>} */}
      {/* Scientific name */}
      <label htmlFor='name'>Scientific name</label>
      <input type='text' name='sciname' className='input' placeholder='Scientific name' />

      {/* Origin */}
      <label htmlFor='origin'>Origin</label>
      <input type='text' name='origin' className='input' placeholder='Origin' />
      {/* {errors && <p className = 'denied-text'>Please input email</p>} */}
      {/* Image */}
      <label htmlFor='image'>Image</label>
      <input type='text' name='image' className='input' placeholder='Image'/>
      {/* {errors && <p className = 'denied-text'>Please input password</p>} */}
      {/* Password Confirmation */}
      <label htmlFor='description'>Description</label>
      <textarea name='description' className='input' placeholder='Description' />
      {/* Submit */}
      <button type='submit'>Add</button>
    </form>
  </section>
  )
}

export default PlantAdd