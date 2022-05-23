import express from 'express'

import { showPlants, showSinglePlant, addPlant, changePlant, deletePlant } from '../controllers/AllPlants.js'
import { secureRoute } from './secureRoute.js'
import { registerUser, loginUser } from '../controllers/Auth.js'
import { editProfile, viewProfile, addFavorite } from '../controllers/Users.js'

const router = express.Router()

router.route('/plants')
  .get(showPlants)
  .post(secureRoute, addPlant)

router.route('/plants/:id')
  .get(showSinglePlant)
  .put(secureRoute, changePlant)
  .delete(secureRoute, deletePlant)

// User Features
router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile/:username')
  .get(viewProfile)
  .put(secureRoute, editProfile)
  
router.route('/favorites/:username')
  .put(addFavorite)

export default router