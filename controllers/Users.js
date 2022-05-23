import 'dotenv/config'
import User from '../models/users.js'

// ? GET REQUESTS
// View Profile
export const viewProfile = async(req, res) => {
  const { username } = req.params
  const profileToView = await User.findOne({ username: username }).populate('favorites')
  return res.status(200).json(profileToView)
}

// ? PUT REQUESTS
// Edit Profile
export const editProfile = async(req, res) => {
  const { username } = req.params
  const { body: editUser } = req
  try {
    const profileToEdit = await User.findOne({ username: username }).populate('favorites')
    if (req.verifiedUser.username !== profileToEdit.username){
      console.log('not the same')
      throw new Error('Unauthorised')
    }
    
    Object.assign(profileToEdit, editUser)

    await profileToEdit.save()

    return res.status(200).json(profileToEdit)
  } catch (error) {
    return res.status(422).json({ message: 'not working' })
  }
  
}

// Add a favorites
export const addFavorite = async (req, res) => {
  const { username } = req.params
  console.log(req.body)
  console.log(req.verifiedUser._id)
  try {

    // Adding favorite to user
    const profileToFavorite = await User.findOne({ username: username })

    if (profileToFavorite.favorites.filter(plant => {
      return plant.plantId.toString() === req.body.plantId
    }).length === 0) {
      profileToFavorite.favorites.push(req.body)
      await profileToFavorite.save()
      return res.status(200).json(profileToFavorite)

    } else {
      
      const removeFav = profileToFavorite.favorites.filter(plant => {
        return plant.plantId.toString() === req.body.plantId
      })
      await removeFav[0].remove()
      console.log(removeFav)
      await profileToFavorite.save()
      return res.status(200).json(profileToFavorite)
    }

  } catch (error) {
    res.status(422).json(error)
    console.log(error)
  }
}