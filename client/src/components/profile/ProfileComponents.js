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









export const CommentsCollection = () => {
  return(
    <p>Comments:</p>
    )
  }

export const RatingsCollection = () => {
  return(
    <p>Under Construction</p>
  )
}