import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [ errors, setErrors ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.name)
    console.log(e.target.value)
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/register', formData)
      navigate('/login')
    } catch (err) {
      setErrors(err.response.status + ' ' + err.response.statusText)
    }
  }
  
  return (
    <section className='form-page'>
      <section className='new-user'>
        <h1>Welcome back!</h1>
        <h4>To access our extra features, please sign in with your personal info.</h4>
        <button>Sign in</button>

      </section>
      <form className='form-detail' onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <h4>Use your email address to register with us</h4>
        <hr/>
        {/* Username */}
        <label htmlFor='username'></label>
        <input type='text' name='username' className='input' placeholder='Username' value = {formData.username} onChange={handleChange}/>
        {/* {errors && <p className = 'denied-text'>Please input username</p>} */}
        {/* Email */}
        <label htmlFor='email'></label>
        <input type='email' name='email' className='input' placeholder='Email' value = {formData.email} onChange={handleChange}/>
        {/* {errors && <p className = 'denied-text'>Please input email</p>} */}
        {/* Password */}
        <label htmlFor='password'></label>
        <input type='password' name='password' className='input' placeholder='Password' value = {formData.password} onChange={handleChange}/>
        {/* {errors && <p className = 'denied-text'>Please input password</p>} */}
        {/* Password Confirmation */}
        <label htmlFor='passwordConfirmation'></label>
        <input type='password' name='passwordConfirmation' className='input' placeholder='Password Confirmation' value = {formData.passwordConfirmation} onChange={handleChange}/>
        {/* Submit */}
        <button type = 'submit'>Register</button>
      </form>
      
    </section>
  )
}

export default Register