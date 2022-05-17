import express from 'express'

import { showPlants, showSinglePlant, changePlant, deletePlant } from '../controllers/AllPlants.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/plants')
  .get(showPlants)

router.route('/plants/:id')
  .get(showSinglePlant)
  .put(secureRoute, changePlant)
  .delete(secureRoute, deletePlant)


export default router