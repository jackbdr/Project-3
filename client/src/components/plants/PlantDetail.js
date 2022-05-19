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
                    src='https://i.guim.co.uk/img/media/e1f6298e43ed90947cf4a3c9a5f6c8244caba0c6/0_382_2786_2784/master/2786.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=a4c3db3cc45e5b4d109ead28f8333cd9'
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
                <h4>Seeded. Ease Rating</h4>
                <p>{plants.easeRating}</p>
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
            </section>
          </section>
          {/* SMALL MIDDLE SECTION FOR THE PAGE BREAK */}
          <section className="middle-section">
            <img src=' ' alt='ivy separator' />
          </section>

          {/* BOTTOM SECTION CONTAINING ADDITIONAL DETAIL */}
          <section className="bottom-section">
            <section className="bottom-content">
              <div className="bottom-image">
                <img src='' alt={plants.name} />
              </div>
              <div className="bottom-detail">
                <div className="detail-facts">
                  <div className="detail-logo">
                    <img src=" " alt="origin-logo" />
                    <p>{plants.origin}</p>
                  </div>
                  <hr />
                  <div className="detail-logo">
                    <img src=" " alt="max-logo" />
                    <p>{plants.maxGrowth}</p>
                  </div>
                  <hr />
                  <div className="detail-logo">
                    <img src=" " alt="yearly-logo" />
                    <p>{plants.annualGrowth}</p>
                  </div>
                  <hr />
                  <div className="detail-logo">
                    <img src=" " alt="price-logo" />
                    <p>{plants.priceRange}</p>
                  </div>
                  <hr />
                  <div className="detail-logo">
                    <img src=" " alt="toxic-logo" />
                    <p>{plants.poisonous}</p>
                  </div>
                </div>
                <div className="problem-section">
                  {plants.problems.map((problem, index) => {
                    console.log(problem)
                    return (
                      <div className="problem-list" key={index}>

                      </div>
                    )

                  })}
                </div>
                <div className="seeded-says">
                  <h3>Seeded says</h3>
                  <p>{plants.seededSays}</p>
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