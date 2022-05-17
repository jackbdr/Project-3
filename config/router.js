import express from 'express'

import { showPlants, showSinglePlant } from '../controllers/AllPlants.js'

const router = express.Router()

router.route('/plants')
  .get(showPlants)

router.route('/plants/:id')
  .get(showSinglePlant)



export default router