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
      <div className='plants-wrapper'>
        {plants.map(plant => {
          const { name, image, _id } = plant
          return (
            <div className='plant' key={_id}>
              <div className='plant-name'>
                <p>{name}</p>
              </div>
              <div className='plant-image'>
                <img src={image} alt={name} />
              </div>
            </div>
          )
        })}
      </div>
    </section >
  )
}

// what's a nicer way of writing 'Price: low to high'

export default PlantOverview