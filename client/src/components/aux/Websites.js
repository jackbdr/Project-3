import axios from "axios"
import React, { useState, useEffect } from 'react'



const Websites = () => {

  const [comparison, setWebsites] = useState()
  const [errors, setErrors] = useState(false)

  useEffect(() => {

    const getWebsites = async () => {
      try {
        const { data } = await axios.get('/api/comparison')
        setWebsites(data)
        console.log(data)
      } catch (err) {
        setErrors(true) 
      }
    }
    getWebsites()
  }, [])

  return (
    <>
      <section className="recommendation-wrapper">
        <section className="overview">
          <h3>Finding plants</h3>
          <hr />
          <p>Finding the right plant at the right price can be difficult. To help, we've listed 6 providers and rated them based on price, range, information and quality</p>
        </section>
        <section className="recommendations">
          <h3>Where we buy from</h3>
          <hr />
          <div className="card-detail">
            <div className='comp-container'>
              <img src='' alt='company-logo' />
            </div>
            <div className='company-info'>
              <h4>Patch</h4>
              <h5>Overall rating: 4</h5>
              <button>Website link</button>
            </div>
            <div className='rating-section'>
              <div className='rating-card'>
                <h6>Price</h6>
                <div className='icon-container'>
                  <img src="" alt='icon' />
                </div>
                <h6>Rating</h6>
              </div>
              <div className='rating-card'>
                <h6>Range</h6>
                <div className='icon-container'>
                  <img src="" alt='icon' />
                </div>
                <h6>Rating</h6>
              </div>
              <div className='rating-card'>
                <h6>Info</h6>
                <div className='icon-container'>
                  <img src="" alt='icon' />
                </div>
                <h6>Rating</h6>
              </div>
              <div className='rating-card'>
                <h6>Quality</h6>
                <div className='icon-container'>
                  <img src="" alt='icon' />
                </div>
                <h6>Rating</h6>
              </div>
            </div>
          </div>

        </section>
      </section>
    </>
  )
}

export default Websites