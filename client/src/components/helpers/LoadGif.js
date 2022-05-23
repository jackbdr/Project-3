import React from 'react'

import loadGif from './loading.gif'

const LoadGif = () => (
  <div className='gif-wrapper'>
    <img src={loadGif} alt='loading-sign' className='load-gif' />
  </div>
)

export default LoadGif