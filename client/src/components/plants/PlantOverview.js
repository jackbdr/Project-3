import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { LightBulb1Off, LightBulb1On, LightBulb2Off, LightBulb2On, LightBulb3Off, LightBulb3On, LightBulb4Off, LightBulb4On, LightBulb5Off, LightBulb5On } from '../helpers/Buttons'


const PlantOverview = () => {

  const [plants, setPlants] = useState([])
  const [filters, setFilters] = useState({
    water: '',
    light: '',
    brightness: '',
    ease: '',
  })
  const [bulbs, setBulbs] = useState(false)


  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // !isUserAuth() && navigate('/login')

    const getPlants = async () => {
      try {
        const { data } = await axios.get('/api/plants')
        // console.log(data)
        setPlants(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getPlants()
  }, [])

  const handleChange = (e) => {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(newObj)
    setBulbs(e.target.id)
    console.log(e.target.id)
  }



  const handleFilter = () => {
    if (plants.length) {
      const filtered = plants.filter(plant => {
        // return plant.waterCategory === filters.water && plant.sunlightFilter === filters.light && plant.brightnessFilter === filters.brightness && plant.seededEaseRating === filters.ease 
        return (plant.waterCategory.toString().includes(filters.water) && plant.sunlightFilter.toString().includes(filters.light) && plant.brightnessFilter.toString().includes(filters.brightness) && plant.seededEaseRating.toString().includes(filters.ease))
      })
      // console.log(filtered)
      // setFilteredPLants(filtered)
      return filtered
    }
  }

  const reset = () => {
    setFilters({
      water: '',
      light: '',
      brightness: '',
      ease: '',
    })
    setBulbs(false)
  }


  return (
    <div className='index-wrapper'>
      <section className='filters'>
        <div className='filters-container'>
          <div className='cans label-icon'>
            <p>Water</p>
            <div className='icons-container'>
              <button id='can-1' className='can' name='water' value={1} onClick={handleChange}></button>
              <button id='can-2' className='can' name='water' value={2} onClick={handleChange}></button>
              <button id='can-3' className='can' name='water' value={3} onClick={handleChange}></button>
              <button id='can-4' className='can' name='water' value={4} onClick={handleChange}></button>
              <button id='can-5' className='can' name='water' value={5} onClick={handleChange}></button>
            </div>
          </div>
          <div className='suns label-icon'>
            <p>Sunlight</p>
            <div className='icons-container'>
              <button id='sun1' className='sun' name='light' value={1} onClick={handleChange}></button>
              <button id='sun2' className='sun' name='light' value={2} onClick={handleChange}></button>
              <button id='sun3' className='sun' name='light' value={3} onClick={handleChange}></button>
              <button id='sun4' className='sun' name='light' value={4} onClick={handleChange}></button>
              <button id='sun5' className='sun' name='light' value={5} onClick={handleChange}></button>
            </div>
          </div>
          <div className='bulbs label-icon'>
            <p>Brightness</p>
            <div className='icons-container'>
              {bulbs === 'bulb1' ?
                <LightBulb1On handleChange={handleChange} />
                :
                <LightBulb1Off handleChange={handleChange} />
              }
              {bulbs === 'bulb2' ?
                <LightBulb2On handleChange={handleChange} />
                :
                <LightBulb2Off handleChange={handleChange} />
              }
              {bulbs === 'bulb3' ?
                <LightBulb3On handleChange={handleChange} />
                :
                <LightBulb3Off handleChange={handleChange} />
              }
              {bulbs === 'bulb4' ?
                <LightBulb4On handleChange={handleChange} />
                :
                <LightBulb4Off handleChange={handleChange} />
              }
              {bulbs === 'bulb5' ?
                <LightBulb5On handleChange={handleChange} />
                :
                <LightBulb5Off handleChange={handleChange} />
              }
            </div>
          </div>
          <div className='thumbs label-icon'>
            <p>Ease rating</p>
            <div className='icons-container'>
              <button className='thumb' name='ease' value={1} onClick={handleChange}></button>
              <button className='thumb' name='ease' value={2} onClick={handleChange}></button>
              <button className='thumb' name='ease' value={3} onClick={handleChange}></button>
              <button className='thumb' name='ease' value={4} onClick={handleChange}></button>
              <button className='thumb' name='ease' value={5} onClick={handleChange}></button>
            </div>
            <button className='reset' onClick={reset}>Reset</button>
          </div>
        </div>
      </section>
      <section className='display-plants'>
        {!plants.length ?
          <p>Sorry, we had trouble growing the data!</p>
          :
          <div className='plants-container'>
            <h3>All plants</h3>
            <Container className='bstrap-container'>
              <Row className='bstrap-row'>
                {handleFilter().map(plant => {
                  const { _id, name, image, sciName, seededEaseRating } = plant
                  return (
                    <Col md='6' lg='4' xl='3' className='plant mb-5' key={_id}>
                      <div className='link-container'>
                        <Link to={`/plants/${_id}`} >
                          <Card className='card'>
                            {/* <div className='sciname-container'>
                    </div> */}
                            <div className='card-img-container'>
                              <Card.Img className='card-img' variant='top' src={image} />
                            </div>
                            <Card.Body >
                              <Card.Title className='text mb-0 card-title'>{name}</Card.Title>
                              <p className='sci-name text'>{sciName}</p>
                              <p className='ease text'>Ease rating {seededEaseRating}</p>
                            </Card.Body>
                          </Card>
                        </Link>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          </div>
        }
      </section >
    </div>
  )
}


export default PlantOverview