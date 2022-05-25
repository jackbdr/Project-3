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
      {comparison ?
        <section className="recommendation-wrapper">
          <section className="overview">
            <h3>Finding plants</h3>
            <hr />
            <p>We know how hard it is to find the right plants at the right price. To help, we've curated a list of 6 providers  and rated them based on price, range, information and quality. Happy shopping!</p>
          </section>
          <section className="recommendations">
            <h3>Where we buy from</h3>
            <hr />
            <div className="card-detail">
              {comparison.map(website => (
                <>
                  <div className='company-row'>
                    <div className='comp-container'>
                      <img src={website.logo} alt='company-logo' />
                    </div>
                    <div className='company-info'>
                      <h4>{website.name}</h4>
                      <h5>Overall rating: <span>{website.overallRating}/20</span></h5>
                      <a href={website.websiteLink} target="_blank"rel="noopener noreferrer"><button>Visit site</button></a>
                    </div>
                    <div className='rating-section'>
                      <div className='rating-card'>
                        <h6>Price</h6>
                        <div className='icon-container'>
                          <img src="/images.png/price-tag.png" alt='icon' />
                        </div>
                        <h6>{website.price}/5</h6>
                      </div>
                      <div className='rating-card'>
                        <h6>Range</h6>
                        <div className='icon-container'>
                          <img src="/images.png/range.png" alt='icon' />
                        </div>
                        <h6>{website.range}/5</h6>
                      </div>
                      <div className='rating-card'>
                        <h6>Info</h6>
                        <div className='icon-container'>
                          <img src="/images.png/info.png" alt='icon' />
                        </div>
                        <h6>{website.info}/5</h6>
                      </div>
                      <div className='rating-card'>
                        <h6>Quality</h6>
                        <div className='icon-container'>
                          <img src="/images.png/quality.png" alt='icon' />
                        </div>
                        <h6>{website.quality}/5</h6>
                      </div>
                    </div>
                    
                  </div>
                  <hr/>
                </>
              )).sort()}
            </div>
          </section>
        </section>
        : <h2>{errors ? 'something went wrong' : ''}</h2>}
    </>
  )
}

export default Websites