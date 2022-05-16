



const PlantEdit = () => {
  return (
    <section className='form-page'>
    <form className='form-detail'>
      <h1>Edit Plant</h1>
      {/* Name */}
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' className='input' placeholder='name' />
      {/* {errors && <p className = 'denied-text'>Please input username</p>} */}
      {/* Origin */}
      <label htmlFor='origin'>Origin</label>
      <input type='text' name='origin' className='input' placeholder='Origin' />
      {/* {errors && <p className = 'denied-text'>Please input email</p>} */}
      {/* Image */}
      <label htmlFor='image'>Image</label>
      <input type='text' name='image' className='input' placeholder='Image' />
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

export default PlantEdit