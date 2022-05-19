import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Searchpage = () => {
const { searchInput } = useParams()
const [ searchResults, setSearchResults ] = useState([])

  useEffect(() => {
    const getSearch = async () => {
      try {
        const { data } = await axios.get('/api/plants')
        console.log(data)
        setSearchResults(data)
        console.log(searchResults)
      } catch (error) {
        
      }
    }
    getSearch()
  }, [])

  const handleSearch = () => {
    return searchResults.filter(plant => {
      const names = plant.name.toLowerCase()
      const searchLower = searchInput.toLowerCase()
      return (names.includes(searchLower))
    })
  }

  return(
  <>
  {searchResults ?
  <div id='search-page'>
    <h1 id='search-results'>Search Results: </h1>
  {handleSearch().map((plant, index) => {
    return(
      <div className='search-wrapper' key={index}>
        <img src={plant.image} alt={plant.name} />
        <div className='searchInfo'>
          <h5>{plant.name}</h5>
          <p>{plant.sciName}</p>
        </div>
      </div>
    )
  })}
  </div>
  : 
  <h1> Loading... </h1>}
  </>
  )
}

export default Searchpage