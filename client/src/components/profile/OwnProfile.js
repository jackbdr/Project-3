import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PlantsCollection, CommentsCollection, PlantsAddedCollection } from './ProfileComponents'

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
        return <CommentsCollection userInfo={userInfo}/>
      } else if (buttonActive === 'Your Added Plants'){
        return <PlantsAddedCollection userInfo={userInfo}/>
      }
  }

  const displayPicture = () => {
    if (userInfo.favorites.length === 0){
      return <p>Add a favorite to display a picture!</p>
    } else {
      return <img id='profileImg' src={userInfo.favorites[0].plantId.imageHome} alt='pic' />
    }
  }

  const changeDate = () => {
    const newDate = new Date(userInfo.dateJoined)
    return newDate.toISOString().substring(0, 10)
  }

  return (
    <div id='profile-wrapper'>
      <div id='profile-left'>
        <div id='img-wrapper'>
          {!userInfo ?
          <p>Loading</p>
          : 
          // <img id='profileImg' src={userInfo.favorites[0].plantId.imageHome} alt='pic' />
          displayPicture()
          }
        </div>
      {!userInfo ? 
        <p>Loading</p>
        :
        <div>
          <div>
            <h1>{userInfo.username}</h1>
          </div>
          <p>Date Joined: {changeDate()}</p>
          <div>
            <ul>
              <li className='profileSelector'>
                <button value={'Your Favorites'} onClick={handleButtons}>Favorite Plants: {userInfo.favorites.length}</button>
              </li>
              <li className='profileSelector'>
                <button value={'Your Comments'} onClick={handleButtons}>Comments Made: {userInfo.comments.length}</button>
              </li>
              <li className='profileSelector'>
              <button value={'Your Added Plants'} onClick={handleButtons}>Plants Added: {userInfo.plantsAdded.length}</button>
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