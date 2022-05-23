import 'dotenv/config'
import jwt from 'jsonwebtoken'

import User from '../models/users.js'

export const registerUser = async(req, res) => {
  const { body } = req
  try {
    const newUser = await User.create(body)
    console.log(newUser)
    return res.status(200).json({ message: `Welcome ${newUser.username}` })
  } catch (error) {
    return res.status(400).json(error)
  }
}

export const loginUser = async(req, res) => {
  const { email, password } = req.body
  console.log('🔒 - hit the login route')
  try {
    const userLogin = await User.findOne({ email: email })
    if (!userLogin || !userLogin.validatePassword(password)) throw new Error
    // console.log('password doesn\'t match') 

    const token = jwt.sign({ sub: userLogin._id }, process.env.SECRET, { expiresIn: '1h' })
    return res.status(200).json({ message: `Welcome back ${userLogin.username}`, token: token })
  } catch (error) {
    console.log('⛔️ - login not working')
    return res.status(422).json({ message: 'Unauthorised' })
  }

}