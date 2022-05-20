import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  const [ errors, setErrors ] = useState(false)

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('project-3-plants', token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      console.log(formData)
      setTokenToLocalStorage(data.token)
      //console.log(data.token)
      console.log(data)
      navigate('/api/')
    } catch (error) {
      setErrors(true)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }

  return (
    <section className='form-page'>
    <form className='form-detail' onSubmit={handleSubmit}>
      <h1>Login</h1>
      {/* Email */}
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' className='input' placeholder='Email' value = {formData.email} onChange={handleChange}/>
      {/* Password */}
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' className='input' placeholder='Password' value = {formData.password} onChange={handleChange}/>
      {errors && <p className = 'denied-text'>Please enter the correct login details</p>}
      {/* Submit */}
      <button type = 'submit'>Login</button>
    </form>
  </section>
  )
}

export default Login