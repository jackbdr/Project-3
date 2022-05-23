import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'

import { getToken } from '../helpers/Auth.js'


const PlantAdd = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    sciName: '',
    origin: '',
    imageTrans: '',
    description: '',
    wateringLevel: '',
    tempRange: '',
    lightType: '',
    brightType: '',
    seededEaseRating: null,
    maxGrowth: '',
    annualGrowth: '',
    priceRange: '',
    poisonous: '',
    problem1: '',
    solution1: '',
    problem2: '',
    solution2: '',
    problem3: '',
    solution3: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/plants', formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      navigate(`/plants/${data._id}`)
    } catch (err) {
      setErrors(err.response.data)
    }
  }



  return (
    <section className='form-page'>
      <Form>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='name'>Plant name</Form.Label>
          <Form.Control name='name' placeholder='Plant name...' />
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='sciName'>Scientific name</Form.Label>
          <Form.Control name='sciName' placeholder='Scientific name...' />
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='description'>Description</Form.Label>
          <Form.Control name='description' placeholder='Description...' />
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='origin'>Origin</Form.Label>
          <Form.Control name='origin' placeholder='Origin...' />
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='wateringLevel'>Watering need</Form.Label>
          <Form.Select name='wateringLevel'>
            <option defaultValue>Watering need...</option>
            <option>Every day</option>
            <option>At least once a week</option>
            <option>Every 8-14 days</option>
            <option>Every 15-21 days</option>
            <option>Once a month</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='tempRange'>Temperature range</Form.Label>
          <Form.Control name='tempRange' placeholder='Temperature range...' />
          <Form.Text className='text-muted'>
            e.g. 18-27°C
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='lightType'>Sunlight need</Form.Label>
          <Form.Select name='lightType'>
            <option defaultValue>Sunlight need...</option>
            <option>Direct</option>
            <option>Mainly direct</option>
            <option>Mixed</option>
            <option>Mainly indirect</option>
            <option>Indirect</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='brightType'>Brightness</Form.Label>
          <Form.Select name='lightType'>
            <option defaultValue>Brightness...</option>
            <option>Bright</option>
            <option>Mainly bright</option>
            <option>Mixed</option>
            <option>Mainly low light</option>
            <option>Low light</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='maxGrowth'>Max growth</Form.Label>
          <Form.Control name='maxGrowth' placeholder='Max growth...' />
          <Form.Text className='text-muted'>
            What about in the wild!?
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='annualGrowth'>Annual growth</Form.Label>
          <Form.Control name='name' placeholder='Annual growth...' />
          <Form.Text className='text-muted'>
            e.g. 50-70cm
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor='priceRange'>Price range</Form.Label>
          <Form.Control name='name' placeholder='Price range...' />
        </Form.Group>
      </Form>
    </section>
  )
}

// <Form>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>


export default PlantAdd