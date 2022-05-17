import Plants from '../models/plants.js'

// Get Plants
export const showPlants = async(res, req) => {
  const plant = await Plants.find()
  console.log({ plant })
  return res.status(200).json(plant)
}