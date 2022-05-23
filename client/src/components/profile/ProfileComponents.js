import axios from "axios"
import react, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export const PlantCollection = ({ userInfo }) => {
  const [ plantInfo, setPlantInfo ] = useState(null)

  useEffect(() => {
  const getFav = async () => {
    try {
      const { data } = await axios.get(`/api/plants/${userInfo.favorite[0]}`)
      setPlantInfo(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  getFav()
  }, [userInfo])

  return (
    <>
      {!plantInfo ? 
      <p>Loading</p>
      :
      <ul id='profileFav'>
        <li className='profileFav-item'>
          <Link to={`/plants/${plantInfo._id}`}>
          <div className="profileFav-img">
            <img src={plantInfo.imageHome} alt={plantInfo.name} />
          </div>
          <div className='profileFav-title'>
            <p>
            {plantInfo.name}
            </p>
            <p className="profileFav-sciName">
            {plantInfo.sciName}
            </p>
          </div>
          </Link>
          < hr/>
        </li>
      </ul>
      }
    </>
  )
}

export const CommentCollection = () => {
  return(
    <p>Comments:</p>
  )
}