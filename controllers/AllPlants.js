import Plant from '../models/plants.js'

// ?GET REQUESTS
// Get All Plants
export const showPlants = async(req, res) => {
  console.log('hit the showplants')
  try {
    const plants = await Plant.find()
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

// ? POST
// Add a plant 
export const addPlant = async (req, res) => {
  const { body: newPlant, verifiedUser } = req
  try {
    const addedPlant = await Plant.create({ ...newPlant, owner: verifiedUser._id })
    return res.status(201).json(addedPlant)
  } catch (err) {
    console.log('Couldn\'t add this plant, sorry!', err)
    return res.status(400).json(err)
  }
}


// ? PUT REQUESTS
// Edit a Plant
export const changePlant = async(req, res) => {
  const { id } = req.params
  const { body: editPlant } = req
  try {
    const plantToChange = await Plant.findById(id)
    if (!plantToChange) throw new Error('Plant not found')
    Object.assign(plantToChange, editPlant)
    
    await plantToChange.save()
    
    return res.status(200).json(plantToChange)
  } catch (error) {
    return res.status(400).json(error)
  }
}

//? DELETE REQUESTS
// Delete a plant
export const deletePlant = async(req, res) => { 
  const { id } = req.params
  try {
    const plantToDelete = await Plant.findById(id)
    console.log(plantToDelete)

    if (!plantToDelete) throw new Error('Plant not found')

    await plantToDelete.remove()
    return res.sendStatus(204)
  } catch (error) {
    return res.status(400).json(error)
  }
}