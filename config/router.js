import express from 'express'

import { showPlants, showSinglePlant, changePlant, deletePlant } from '../controllers/AllPlants.js'

const router = express.Router()

router.route('/plants')
  .get(showPlants)

router.route('/plants/:id')
  .get(showSinglePlant)
  .put(changePlant)
  .delete(deletePlant)


export default router