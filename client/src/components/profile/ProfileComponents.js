import { Link } from "react-router-dom"

export const PlantsCollection = ({ userInfo }) => {
  console.log(userInfo)

  return(
    <>
    {!userInfo ?
      <p>Loading</p>
      :
      <ul id='profileFav'>
      {userInfo.favorites.map((plant, index) => {
        const { plantId } = plant
        return(
          <li className='profileFav-item' key={index}>
            <Link to={`/plants/${plantId._id}`} >
              <div className="profileFav-img">
                <img src={plantId.imageTrans} alt={plantId.name} />
              </div>
              <div className='profileFav-title'>
                <p>
                {plantId.name}
                </p>
                <p className="profileFav-sciName">
                {plantId.sciName}
                </p>
              </div>
            </Link>
            < hr/>
          </li>
        )
      })}
      </ul>
    }
    </>
  )
}


export const CommentsCollection = ({ userInfo }) => {
  return(
    <>
    {!userInfo ?
      <p>Loading</p>
      :
      <ul id='profileFav'>
      {userInfo.comments.map((comment, index) => {
        return(
          <li className='profileFav-item' key={index}>
            <Link to={`/plants/${comment.plantId}`}>
              <div className="profileFav-img">
                <img src={comment.plantImg} alt={comment.name} />
              </div>
              <div className='profileFav-title'>
                <p>
                {comment.plantName} - Rating: {comment.rating}
                </p>
                <p className="profileFav-sciName">
                {comment.title}
                </p>
                <p>
                  {comment.text}
                </p>
              </div>
              < hr/>
            </Link>
          </li>
        )
      })}
      </ul>
    }
    </>
  )
}



export const PlantsAddedCollection = ({ userInfo }) => {
  return(
    <>
    {!userInfo ?
    <p>Loading</p>
    :
    <ul id='profileFav'>
      {userInfo.plantsAdded.map((plant, index) => {
        return(
          <li className='profileFav-item' key={index}>
            <Link to={`/plants/${plant._id}`} >
              <div className="profileFav-img">
                <img src={plant.imageTrans} alt={plant.name} />
              </div>
              <div className='profileFav-title'>
                <p>
                {plant.name}
                </p>
                <p className="profileFav-sciName">
                {plant.sciName}
                </p>
              </div>
            </Link>
            < hr/>
          </li>
        )
      })}
      </ul>
    }
    </>
  )
}