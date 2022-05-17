import Plant from '../models/plants.js'

// Get Plants
export const showPlants = async(req, res) => {
  const plants = await Plant.find()
  console.log({ plants })
  return res.status(200).json(plants)
}