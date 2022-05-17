import 'dotenv/config'
import User from '../models/users.js'

// ? GET REQUESTS
// View Profile
export const viewProfile = async(req, res) => {
  const { id } = req.params
}

// ? PUT REQUESTS
// Edit Profile
export const editProfile = async() => {

}



export const loginUser = async(req, res) => {
  const { username, password } = req.body
  try {
    const userLogin = await User.findOne({ username: username })
    if (!userLogin || !userLogin.validatePassword(password)) throw new Error

    const token = jwt.sign({ sub: userLogin._id }, process.env.SECRET, { expiresIn: '1h' })
    return res.status(200).json({ message: `Welcome back ${userLogin.username}`, token: token })
  } catch (error) {
    return res.status(422).json({ message: 'Unauthorised' })
  }

}