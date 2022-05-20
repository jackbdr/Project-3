import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const OwnProfile = () => {
  const { username } = useParams()
  const [ userInfo, setUserInfo ] = useState(null)

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

  return (
    <div id='profile-wrapper'>
      <div id='profile-left'>
        <div id='img-wrapper'>
          <img id='profileImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png' alt='pic' />
        </div>
      {!userInfo ? 
        <p>Loading</p>
        :
        <p>{userInfo.username}</p>
      }

      </div>
      <div id='profile-right'>
        <p>Right</p>
      </div>
    </div>
  )
}

export default OwnProfile