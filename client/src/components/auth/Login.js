

const Login = () => {
  return (
    <section className='form-page'>
    <form className='form-detail'>
      <h1>Login</h1>
      {/* Email */}
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' className='input' placeholder='Email'/>
      {/* Password */}
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' className='input' placeholder='Password'/>
      {/* {errors && <p className = 'denied-text'>Unauthorised</p>} */}
      {/* Submit */}
      <button type = 'submit'>Login</button>
    </form>
  </section>
  )
}

export default Login