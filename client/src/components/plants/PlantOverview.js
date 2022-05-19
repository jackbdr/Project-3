import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const PlantOverview = () => {

  const [plants, setPlants] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // !isUserAuth() && navigate('/login')

    const getPlants = async () => {
      try {
        const { data } = await axios.get('/api/plants')
        console.log(data)
        setPlants(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getPlants()
  }, [])


  return (
    <section>
      {errors ?
        <p>Sorry, we had trouble fetching the data!</p>
        :
        <Container className='plants-wrapper'>
          <Row>
            {plants.map(plant => {
              const { _id, name, image, sciName } = plant
              return (
                <Col md='4' lg='3' className='plant mb-4' key={_id}>
                  <Link to={`/plants/${_id}`}>
                    <Card>
                      <Card.Img className='card-img' variant='top' src={image} />
                      <Card.Body >
                        <Card.Title className='text-center mb-0 card-title'>{name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      }
    </section >
  )
}



// what's a nicer way of writing 'Price: low to high'

export default PlantOverview