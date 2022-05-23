import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PlantsCollection, CommentsCollection, RatingsCollection } from './ProfileComponents'

const OwnProfile = () => {
  const { username } = useParams()
  const [ userInfo, setUserInfo ] = useState(null)
  const [ buttonActive, setButtonActive ] = useState('Your Favorites')

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/api/profile/${username}`)
        setUserInfo(data)
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
        return <PlantsCollection userInfo={userInfo} />
      } else if (buttonActive === 'Your Comments'){
        return <CommentsCollection />
      } else if (buttonActive === 'Your Ratings'){
        return <RatingsCollection />
      }
  }

  return (
    <div id='profile-wrapper'>
      <div id='profile-left'>
        <div id='img-wrapper'>
          {!userInfo ?
          <p>Loading</p>
          :
          <img id='profileImg' src={userInfo.favorites[0].plantId.imageHome} alt='pic' />
          }
        </div>
      {!userInfo ? 
        <p>Loading</p>
        :
        <div>
          <div>
            <h1>{userInfo.username}</h1>
          </div>
          <p>Date Joined</p>
          <div>
            <ul>
              <li className='profileSelector'>
                <button value={'Your Favorites'} onClick={handleButtons}>Number of plants in collection: {userInfo.favorites.length}</button>
              </li>
              <li className='profileSelector'>
                <button value={'Your Comments'} onClick={handleButtons}>Comments Made</button>
              </li>
              <li className='profileSelector'>
              <button value={'Your Ratings'} onClick={handleButtons}>Ratings Given</button>
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