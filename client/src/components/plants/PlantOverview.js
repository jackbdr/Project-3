import React, { useEffect } from 'react'
import axios from 'axios'


const PlantOverview = () => {

  useEffect(() => {

    const getPlants = async () => {
      try {
        const response = await axios.get('/api/plants')
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
    getPlants()
  }, [])


  return (
    <section>
      <div className="filter">
        <input type="text" placeholder="Search..." id="search" />
        <select className="sort-by">
          <option value="all">All</option>
          <option value="price">Price: low to high</option>
          <option value="care">Ease of care</option>
          <option value="clout">Most popular</option>
        </select>
      </div>
      <div>
        <div>
          <div className="grid-wrapper">
            <img src={'https://res.cloudinary.com/dtzeqjcsa/image/upload/v1652882951/plant_pngs/snake_xexssl.png'} alt='snake plant' />
          </div>
        </div>
      </div>
    </section >
  )
}

// what's a nicer way of writing 'Price: low to high'

export default PlantOverview