// import Button from 'react-bootstrap/Button'
// import Carousel from 'react-bootstrap/Carousel'
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
        const { data } = await axios.get(`http://localhost:3000/api/plants/${id}`)
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