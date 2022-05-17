import express from 'express'

const router = express.Router()

router.route('/plants')
  .get(showPlants)


export default router