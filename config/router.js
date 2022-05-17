import express from 'express'

import { showPlants, showSinglePlant, changePlant, deletePlant } from '../controllers/AllPlants.js'
import { registerUser, loginUser } from '../controllers/Auth.js'
import { editProfile, viewProfile } from '../controllers/Users.js'

const router = express.Router()

router.route('/plants')
  .get(showPlants)

router.route('/plants/:id')
  .get(showSinglePlant)
  .put(changePlant)
  .delete(deletePlant)

router.route('/randomPlant')
  .get()

  
// User Features
router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile/:id')
  .get(viewProfile)
  .put(editProfile)



// Get random plant, edit profile, get profile



export default router