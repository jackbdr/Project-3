import React, { useState, useEffect } from 'react'
import axios from 'axios'


const PlantOverview = () => {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    const getPlants = async () => {
      try {
        const { data } = await axios.get('/api/plants')
        setPlants(data)
        console.log(data[0].image)
      } catch (err) {
        console.log(err)
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
              <div className='plant-image'>
                <img src={image} alt={name} />
              </div>
              <div className='plant-name'>
                <p>{name}</p>
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