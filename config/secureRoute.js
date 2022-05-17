import jwt from 'jsonwebtoken'
import User from '../models/users.js'

export const secureRoute = async (req, res, next) => {
  console.log('🍄 HIT THE SECURE ROUTE')
  try {
    console.log(req.headers)

    if (!req.headers.authorization) throw new Error('Missing Auth. header.')
    const token = req.headers.authorization.replace('Bearer ', '')

    const payload = jwt.verify(token, process.env.SECRET) 
    
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('Sorry, user not found.')

    // update req object that is to be passed to the controller, and add the userToVerify
    req.verifiedUser = userToVerify
    // console.log(req)

    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}