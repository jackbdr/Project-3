import express from 'express'

import { showPlants, showSinglePlant, changePlant, deletePlant } from '../controllers/AllPlants.js'
import { secureRoute } from './secureRoute.js'
import { registerUser, loginUser } from '../controllers/Auth.js'

const router = express.Router()

router.route('/plants')
  .get(showPlants)

router.route('/plants/:id')
  .get(showSinglePlant)
  .put(secureRoute, changePlant)
  .delete(secureRoute, deletePlant)



// User Features
router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)
export default router