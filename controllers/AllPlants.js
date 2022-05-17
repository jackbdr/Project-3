import Plant from '../models/plants.js'

// ?GET REQUESTS
// Get All Plants
export const showPlants = async(req, res) => {
  try {
    const plants = await Plant.find()
    console.log({ plants })
    return res.status(200).json(plants)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// Get Single Plants
export const showSinglePlant = async(req, res) => {
  try {
    const { id } = req.params
    const plant = await Plant.findById(id)
    if (!plant) throw new Error('Plant not found')
    return res.status(200).json(plant)
  } catch (error) {
    return res.status(400).json(error)
  }
}

