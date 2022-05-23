import axios from "axios"
import react, { useEffect } from 'react'
import { Link } from "react-router-dom"

export const PlantCollection = ({ userInfo }) => {
  const plants = []
  useEffect(() => {
  const getFav = async () => {
    try {
      userInfo.favorites.forEach(fav => {
        console.log(fav)
        if (plants.includes(fav)){
          return
        } else {
          plants.push(fav)
          console.log({ plants })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  getFav()

  }, [userInfo])

  // useEffect(() => {
  //   console.log(plantInfo)
  // }, [plantInfo])
  return (
    <>
      {/* {!plantInfo ? 
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
      } */}
      <p>Hi</p>
    </>
  )
}

export const CommentCollection = () => {
  return(
    <p>Comments:</p>
  )
}