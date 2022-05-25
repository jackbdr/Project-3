import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { isUserAuth } from '../helpers/Auth'

import { Can1, Can1Colour, Can2, Can2Colour, Can3, Can3Colour, Can4, Can4Colour, Can5, Can5Colour } from '../helpers/Buttons'
import { Sun1, Sun1Colour, Sun2, Sun2Colour, Sun3, Sun3Colour, Sun4, Sun4Colour, Sun5, Sun5Colour } from '../helpers/Buttons'
import { LightBulb1Off, LightBulb1On, LightBulb2Off, LightBulb2On, LightBulb3Off, LightBulb3On, LightBulb4Off, LightBulb4On, LightBulb5Off, LightBulb5On } from '../helpers/Buttons'
import { Thumb1, Thumb1Colour, Thumb2, Thumb2Colour, Thumb3, Thumb3Colour, Thumb4, Thumb4Colour, Thumb5, Thumb5Colour } from '../helpers/Buttons'

import LoadGif from '../helpers/LoadGif'

const PlantOverview = () => {

  const [plants, setPlants] = useState([])
  const [waterFilter, setWaterFilter] = useState({
    water: '',
  })
  const [lightFilter, setLightFilter] = useState({
    light: '',
  })
  const [brightnessFilter, setBrightnessFilter] = useState({
    brightness: '',
  })
  const [easeFilter, setEaseFilter] = useState({
    ease: '',
  })

  const [cans, setCans] = useState(false)
  const [suns, setSuns] = useState(false)
  const [bulbs, setBulbs] = useState(false)
  const [thumbs, setThumbs] = useState(false)



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
        setLoading(false)
        console.log(err)
        setErrors(true)
      }
    }
    getPlants()
  }, [])

  const handleCanChange = (e) => {
    if (cans === e.target.id) {
      setCans(false)
      setWaterFilter({ water: '' })
    } else {
      const newObj = {
        ...waterFilter,
        [e.target.name]: e.target.value
      }
      setWaterFilter(newObj)
      setCans(e.target.id)
      console.log(e.target.id)
    }
  }

  const handleSunChange = (e) => {
    if (suns === e.target.id) {
      setSuns(false)
      setLightFilter({ light: '' })
    } else {
      const newObj = {
        ...lightFilter,
        [e.target.name]: e.target.value
      }
      setLightFilter(newObj)
      setSuns(e.target.id)
      console.log(e.target.id)
    }
  }

  const handleBulbChange = (e) => {
    if (bulbs === e.target.id) {
      setBulbs(false)
      setBrightnessFilter({ brightness: '' })
    } else {
      const newObj = {
        ...brightnessFilter,
        [e.target.name]: e.target.value
      }
      setBrightnessFilter(newObj)
      setBulbs(e.target.id)
      console.log(e.target.id)
    }
  }

  const handleThumbChange = (e) => {
    if (thumbs === e.target.id) {
      setThumbs(false)
      setEaseFilter({ ease: '' })
    } else {
      const newObj = {
        ...easeFilter,
        [e.target.name]: e.target.value
      }
      setEaseFilter(newObj)
      setThumbs(e.target.id)
      console.log(e.target.id)
    }
  }

  const handleFilter = () => {
    if (plants.length) {
      const filtered = plants.filter(plant => {
        if (plant.waterCategory && plant.sunlightFilter && plant.brightnessFilter && plant.seededEaseRating) {
          return (plant.waterCategory.toString().includes(waterFilter.water) && plant.sunlightFilter.toString().includes(lightFilter.light) && plant.brightnessFilter.toString().includes(brightnessFilter.brightness) && plant.seededEaseRating.toString().includes(easeFilter.ease))
        } else {
          return plant.name
        }
      })
      return filtered.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })
    }
  }

  const filtersEmpty = waterFilter.water === '' && lightFilter.light === '' && brightnessFilter.brightness === '' && easeFilter.ease === ''


  const resetCans = () => {
    setWaterFilter({
      water: '',
    })
    setCans(false)
  }

  const resetSuns = () => {
    setLightFilter({
      light: '',
    })
    setSuns(false)
  }

  const resetBulbs = () => {
    setBrightnessFilter({
      brightness: '',
    })
    setBulbs(false)
  }

  const resetThumbs = () => {
    setEaseFilter({
      ease: '',
    })
    setThumbs(false)
  }

  return (
    <div className='index-wrapper'>
      <section className='filters'>
        <div className='filters-addplant'>
          <div className='filters-container'>
            <h4>Filters</h4>
            <div className='scale'>
              <p>Low</p>
              <p>High</p>
            </div>
            <hr className='break' />
            <div className='icon-cross-container'>
              <div className='cans label-icon'>
                <p>Watering</p>
                <div className='icons-container'>
                  {cans === 'can1' ?
                    <Can1Colour handleCanChange={handleCanChange} />
                    :
                    <Can1 handleCanChange={handleCanChange} />
                  }
                  {cans === 'can2' ?
                    <Can2Colour handleCanChange={handleCanChange} />
                    :
                    <Can2 handleCanChange={handleCanChange} />
                  }
                  {cans === 'can3' ?
                    <Can3Colour handleCanChange={handleCanChange} />
                    :
                    <Can3 handleCanChange={handleCanChange} />
                  }
                  {cans === 'can4' ?
                    <Can4Colour handleCanChange={handleCanChange} />
                    :
                    <Can4 handleCanChange={handleCanChange} />
                  }
                  {cans === 'can5' ?
                    <Can5Colour handleCanChange={handleCanChange} />
                    :
                    <Can5 handleCanChange={handleCanChange} />
                  }
                </div>
              </div>
              <div className='cross-container'>
                <button className='cross' onClick={resetCans}></button>
              </div>
            </div>
            <div className='icon-cross-container'>
              <div className='suns label-icon'>
                <p>Sunlight</p>
                <div className='icons-container'>
                  {suns === 'sun1' ?
                    <Sun1Colour handleSunChange={handleSunChange} />
                    :
                    <Sun1 handleSunChange={handleSunChange} />
                  }
                  {suns === 'sun2' ?
                    <Sun2Colour handleSunChange={handleSunChange} />
                    :
                    <Sun2 handleSunChange={handleSunChange} />
                  }
                  {suns === 'sun3' ?
                    <Sun3Colour handleSunChange={handleSunChange} />
                    :
                    <Sun3 handleSunChange={handleSunChange} />
                  }
                  {suns === 'sun4' ?
                    <Sun4Colour handleSunChange={handleSunChange} />
                    :
                    <Sun4 handleSunChange={handleSunChange} />
                  }
                  {suns === 'sun5' ?
                    <Sun5Colour handleSunChange={handleSunChange} />
                    :
                    <Sun5 handleSunChange={handleSunChange} />
                  }
                </div>
              </div>
              <div className='cross-container'>
                <button className='cross' onClick={resetSuns}></button>
              </div>
            </div>
            <div className='icon-cross-container'>
              <div className='bulbs label-icon'>
                <p>Brightness</p>
                <div className='icons-container'>
                  {bulbs === 'bulb1' ?
                    <LightBulb1On handleBulbChange={handleBulbChange} />
                    :
                    <LightBulb1Off handleBulbChange={handleBulbChange} />
                  }
                  {bulbs === 'bulb2' ?
                    <LightBulb2On handleBulbChange={handleBulbChange} />
                    :
                    <LightBulb2Off handleBulbChange={handleBulbChange} />
                  }
                  {bulbs === 'bulb3' ?
                    <LightBulb3On handleBulbChange={handleBulbChange} />
                    :
                    <LightBulb3Off handleBulbChange={handleBulbChange} />
                  }
                  {bulbs === 'bulb4' ?
                    <LightBulb4On handleBulbChange={handleBulbChange} />
                    :
                    <LightBulb4Off handleBulbChange={handleBulbChange} />
                  }
                  {bulbs === 'bulb5' ?
                    <LightBulb5On handleBulbChange={handleBulbChange} />
                    :
                    <LightBulb5Off handleBulbChange={handleBulbChange} />
                  }
                </div>
              </div>
              <div className='cross-container'>
                <button className='cross' onClick={resetBulbs}></button>
              </div>
            </div>
            <div className='icon-cross-container'>
              <div className='thumbs label-icon'>
                <p>Ease rating</p>
                <div className='icons-container'>
                  {thumbs === 'thumb1' ?
                    <Thumb1Colour handleThumbChange={handleThumbChange} />
                    :
                    <Thumb1 handleThumbChange={handleThumbChange} />
                  }
                  {thumbs === 'thumb2' ?
                    <Thumb2Colour handleThumbChange={handleThumbChange} />
                    :
                    <Thumb2 handleThumbChange={handleThumbChange} />
                  }
                  {thumbs === 'thumb3' ?
                    <Thumb3Colour handleThumbChange={handleThumbChange} />
                    :
                    <Thumb3 handleThumbChange={handleThumbChange} />
                  }
                  {thumbs === 'thumb4' ?
                    <Thumb4Colour handleThumbChange={handleThumbChange} />
                    :
                    <Thumb4 handleThumbChange={handleThumbChange} />
                  }
                  {thumbs === 'thumb5' ?
                    <Thumb5Colour handleThumbChange={handleThumbChange} />
                    :
                    <Thumb5 handleThumbChange={handleThumbChange} />
                  }
                </div>
              </div>
              <div className='cross-container'>
                <button className='cross' onClick={resetThumbs}></button>
              </div>
            </div>
          </div>
          {isUserAuth() ?
            <div className='addplant'>
              <p>Do <span className='italic'>you</span> know your plants? Why not add to the collection!</p>
              <Link className='btn add-button' to='/plants/add'>Add a plant</Link>
            </div>
            :
            <div className='login-to-add'>
              <p>Do <span className='italic'>you</span> know your plants? Sign in to add to the collection.</p>
              <Link className='btn login-button' to='/login'>Join Seeded</Link>
            </div>
          }
        </div>
      </section >
      <section className='display-plants'>
        {loading ?
          <LoadGif />
          :
          errors ?
            <p>Sorry, we had trouble fetching the data!</p>
            :
            <div className='plants-container'>
              {filtersEmpty ?
                <div className='display-filters'>
                  <h4>All plants</h4>
                  <p>({handleFilter().length})</p>
                </div>
                :
                <div className='display-filters'>
                  <h4>{waterFilter.water && `Watering category ${waterFilter.water}`} {lightFilter.light && (waterFilter.water ? `, Light category ${lightFilter.light}` : `Light category ${lightFilter.light}`)} {brightnessFilter.brightness && (waterFilter.water || lightFilter.light ? `, Brightness category ${brightnessFilter.brightness}` : `Brightness category ${brightnessFilter.brightness}`)} {easeFilter.ease && (waterFilter.water || lightFilter.light || brightnessFilter.brightness ? `, Ease rating ${easeFilter.ease}` : `Ease rating ${easeFilter.ease}`)}</h4>
                  <p>({handleFilter().length})</p>
                </div>
              }
              <hr className='break' />
              <Container className='bstrap-container'>
                <Row className='bstrap-row'>
                  {handleFilter().map(plant => {
                    const { _id, name, imageTrans, sciName, seededEaseRating } = plant
                    return (
                      <Col md='6' lg='4' xl='3' className='plant mb-4' key={_id}>
                        <div className='link-container'>
                          <Link to={`/plants/${_id}`} >
                            <Card className='card'>
                              {/* <div className='sciname-container'>
                              </div> */}
                              <div className='card-img-container'>
                                <Card.Img className='card-img' variant='top' src={imageTrans} />
                              </div>
                              <Card.Body >
                                <Card.Title className='text mb-0 card-title'>{name}</Card.Title>
                                <p className='sci-name text'>{sciName}</p>
                                <p className='ease text'>Ease rating {seededEaseRating && seededEaseRating}</p>
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
    </div >
  )
}
export default PlantOverview