// import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'


const PlantDetail = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const [plants, setPlants] = useState()
  const [errors, setErrors] = useState(false)

  useEffect(() => {

    const getPlants = async () => {
      try {
        const { data } = await axios.get(`/api/plants/${id}`)
        setPlants(data)
        console.log(data)
      } catch (err) {
        setErrors(true)
      }
    }
    getPlants()
  }, [id])


  return (
    <>
      {plants ?
        <section className="overall-container">
          {/* SPLITTING UP THE PAGE INTO SECTIONS FOR SCROLLING - TOP SECTION */}
          <section className="top-page">
            <section className="left-page">
              <Carousel className='plant-pic'>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={plants.image}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src='https://pyxis.nymag.com/v1/imgs/b82/665/f7757415a07efbf46caf22548dcabf9798-etsy-african-spear-plant.2x.rdeep-vertical.w245.jpg'
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="seeded-rating">
                <div className='seeded-title'>
                  <h4>Seeded Ease Rating</h4>
                </div>
                <div className='seeded-detail'>
                  <div className='seeded-image'>
                    <h1>🌱</h1>
                  </div>
                  <small>{plants.easeRating}</small>
                </div>

              </div>
            </section>
            <section className="right-page">
              <div className="key-content">
                <h1>{plants.name}</h1>
                <h3>{plants.sciName}</h3>
                <div className="description">
                  <h4>About Me</h4>
                  <p>{plants.description}</p>
                </div>
                <hr />
              </div>
              <div className="care-ratings">
                <div className="rating-title">
                  <h4>Care tips</h4>
                </div>
                <div className="tips-details">
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/watering-can.png" alt="water-logo" />
                    </div>
                    <small>{plants.wateringLevel}</small>
                  </div>
                  <hr />
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/temperature.png" alt="temp-logo" />
                    </div>
                    <small>{plants.tempRange}</small>
                  </div>
                  <hr />
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/light-bulb.png" alt="light-logo" />
                    </div>
                    <small>{plants.lightType} sunlight</small>
                  </div>
                  <hr />
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/sunny.png" alt="bright-logo" />
                    </div>
                    <small>{plants.lightType} brightness</small>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/* SMALL MIDDLE SECTION FOR THE PAGE BREAK */}
          <section className="middle-section">
            <img src='/images.png/ivy.png' alt='ivy separator' />
          </section>

          {/* BOTTOM SECTION CONTAINING ADDITIONAL DETAIL */}
          <section className="bottom-section">
            <section className="bottom-content">
              <div className="plant-pic">
                <img src={plants.image} alt={plants.name} />
              </div>
              <div className="right-bottom">
                <div className="facts">
                  <div className='facts-title'>
                    <h4>Key facts</h4>
                  </div>
                  <div className="facts-detail">
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/location.png" alt="origin-logo" />
                      </div>
                      <small>{plants.origin}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/spider-plant.png" alt="height-logo" />
                      </div>
                      <small>{plants.maxGrowth}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/calendar.png" alt="calendar-logo" />
                      </div>
                      <small>{plants.annualGrowth}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/price-tag.png" alt="price-logo" />
                      </div>
                      <small>{plants.priceRange}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/toxic.png" alt="price-logo" />
                      </div>
                      <small>{plants.poisonous}</small>
                    </div>
                  </div>
                </div>
                <div className="problem-section">
                  <div className='problem-title'>
                    <h4>Typical problems</h4>
                  </div>
                  <div className='problem-detail'>

                  </div>
                </div>
                <div className="seeded-says">
                  <h3>Seeded says</h3>
                  <p>{plants.seededSays}</p>
                </div>
              </div>
            </section>
            {/* <!--Carousel Wrapper--> */}
            <section id="multi-item-carousel" className="carousel-multi-item" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="col"><img src=".." alt="1 slide"/></div>
                      <div class="col"><img src=".." alt="2 slide"/></div>
                      <div class="col"><img src=".." alt="3 slide"/></div>
                    </div>
                    <div class="row">
                      <div class="col"><img src=".." alt="4 slide"/></div>
                      <div class="col"><img src=".." alt="5 slide"/></div>
                      <div class="col"><img src=".." alt="6 slide"/></div>
                    </div>
                  </div>
                </div>
            </section>
          </section>
        </section>
        :
        <h2>{errors ? 'something went wrong' : ''}</h2>}
    </>
  )
}

export default PlantDetail












// <Container id='plantShow' className='mt-4'>
//       <Row>
//         <Col md='6' className='plant-pic'>
//           <Carousel className='plant-pic'>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src='https://i.guim.co.uk/img/media/e1f6298e43ed90947cf4a3c9a5f6c8244caba0c6/0_382_2786_2784/master/2786.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=a4c3db3cc45e5b4d109ead28f8333cd9'
//                 alt="First slide"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src='https://pyxis.nymag.com/v1/imgs/b82/665/f7757415a07efbf46caf22548dcabf9798-etsy-african-spear-plant.2x.rdeep-vertical.w245.jpg'
//                 alt="Second slide"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BsGUNlOG6hd8RrKcF6UJ2FF3viIp3pQw5w&usqp=CAU'
//                 alt="Third slide"
//               />
//             </Carousel.Item>
//           </Carousel>
//         </Col>
//         <Col md='6' id='plant-info'>
//           <h1>Default Plant - Planto Defaulto</h1>
//           <hr />
//           <h4>Origin</h4>
//           <p>United Kingdom</p>
//           <hr />
//           <h4>Plant Care</h4>
//           <p>Watering info, light, temperature etc.</p>
//           <hr />
//           <h4>Pet suitability</h4>
//           <p>Yes</p>
//           <hr />
//           <div id='buttons'>
//           <Button variant="outline-dark">Edit Plant</Button>
//           <Button variant="outline-danger">Delete Plant</Button>
//           <Button variant="outline-success">Like Plant</Button>
//           <Button variant="outline-info">Comment</Button>
//           </div>
//         </Col>
//       </Row>
//       <div id='reviews'>
//         <div>
//           <div><h5>Jimothy</h5></div>
//           <div>⭐️⭐️⭐️⭐️/⭐️⭐️⭐️⭐️⭐️</div>
//           <div>
//             This is my Review!
//           </div>
//           <hr />
//         </div>
//         <div>
//           <div><h5>Dwight</h5></div>
//           <div>⭐️⭐️⭐️/⭐️⭐️⭐️⭐️⭐️</div>
//           <div>
//             This is also my review
//           </div>
//           <hr />
//         </div>
//       </div>
//     </Container>