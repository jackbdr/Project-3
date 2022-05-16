


const Register = () => {
  return (
    <section className='form-page'>
      <form className='form-detail'>
        <h1>Register</h1>
        {/* Username */}
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' className='input' placeholder='Username' />
        {/* {errors && <p className = 'denied-text'>Please input username</p>} */}
        {/* Email */}
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' className='input' placeholder='Email' />
        {/* {errors && <p className = 'denied-text'>Please input email</p>} */}
        {/* Password */}
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' className='input' placeholder='Password'/>
        {/* {errors && <p className = 'denied-text'>Please input password</p>} */}
        {/* Password Confirmation */}
        <label htmlFor='passwordConfirmation'>Password Confirmation</label>
        <input type='password' name='passwordConfirmation' className='input' placeholder='Password Confirmation'/>
        {/* Submit */}
        <button type = 'submit'>Register</button>
      </form>
    </section>
  )
}

export default Register