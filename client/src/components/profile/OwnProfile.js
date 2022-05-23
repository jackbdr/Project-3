import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PlantCollection, CommentCollection } from './ProfileComponents'

const OwnProfile = () => {
  const { username } = useParams()
  const [ userInfo, setUserInfo ] = useState(null)
  const [ plantInfo, setPlantInfo ] = useState(null)
  const [ buttonActive, setButtonActive ] = useState('Your Favorites')

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/api/profile/${username}`)
        console.log(data)
        setUserInfo(data)
        const plantData = await axios.get(`/api/plants/${data.favorite[0]}`)
        console.log(plantData)
        setPlantInfo(plantData)
      } catch (error) {
        
      }
    }

    getUser()
  }, [])

  const handleButtons = (e) => {
    console.log(e.target.value)
    setButtonActive(e.target.value)
  }

  const asideChange = () => {
      if (buttonActive === 'Your Favorites'){
        return <PlantCollection userInfo={userInfo} />
      } else if (buttonActive === 'Your Comments'){
        return <CommentCollection />
      }
  }

  return (
    <div id='profile-wrapper'>
      <div id='profile-left'>
        <div id='img-wrapper'>
          {!plantInfo ?
          <p>Loading</p>
          :
          <img id='profileImg' src={plantInfo.data.imageHome} alt='pic' />
          }
        </div>
      {!userInfo ? 
        <p>Loading</p>
        :
        <div>
          <div>
            <h1>{userInfo.username}</h1>
          </div>
          <p>Click To View</p>
          <div>
            <ul>
              <li>
                <button value={'Your Favorites'} onClick={handleButtons}>Number of plants in collection: {userInfo.favorite.length}</button>
              </li>
              <li>
                <button value={'Your Comments'} onClick={handleButtons}>Comments Made</button>
              </li>
              <li>
                <button>Ratings Given</button>
              </li>
              <li>
                Date Joined
              </li>
            </ul>
          </div>
        </div>
      }

      </div>
      <div id='profile-right'>
        <h2>{buttonActive}</h2>
        {asideChange()}
      </div>
    </div>
  )
}

export default OwnProfile