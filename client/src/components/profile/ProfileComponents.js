import { Link } from "react-router-dom"

export const PlantsCollection = ({ userInfo }) => {
  console.log(userInfo)

  return(
    <>
    {!userInfo ?
      <p>Loading</p>
      :
      <div id='profileFav'>
        {userInfo.favorites.length === 0 ? 
        <h2>No Favorites Added</h2>
        :
        <>
        {userInfo.favorites.map((plant, index) => {
          const { plantId } = plant
          return(
            <div className='profileFav-item' key={index}>
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
            </div>
          )
        })}
      </>
      }
      </div>
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
      <div id='profileFav'>
        {userInfo.comments.length === 0 ? 
      <h2>No Comments Added</h2>
      :
      <>
        {userInfo.comments.map((comment, index) => {
          return(
            <div className='profileFav-item' key={index}>
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
          </div>
        )
      })}
      </>
      }
      </div>
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
    <div id='profileFav'>
      {userInfo.plantsAdded.length === 0 ? 
        <h2>No Plants Added</h2>
      :
      <>
      {userInfo.plantsAdded.map((plant, index) => {
        return(
          <div className='profileFav-item' key={index}>
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
          </div>
        )
      })}
      </>
    }
      </div>
    }
    </>
  )
}