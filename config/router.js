import express from 'express'

import { showPlants } from '../controllers/AllPlants.js'

const router = express.Router()

router.route('/plants')
  .get(showPlants)


export default router