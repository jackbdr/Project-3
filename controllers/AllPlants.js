import Plant from '../models/plants.js'

// ?GET REQUESTS
// Get All Plants
export const showPlants = async (req, res) => {
  console.log('hit the showplants')
  try {
    const plants = await Plant.find()
    return res.status(200).json(plants)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// Get Single Plants
export const showSinglePlant = async (req, res) => {
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
    // Work out filtering 
    const waterCategory = () => {
      if (newPlant.wateringLevel === 'Every day') {
        return 5
      } else if (newPlant.wateringLevel === 'At least once a week') {
        return 4
      } else if (newPlant.wateringLevel === 'Every 8-14 days') {
        return 3
      } else if (newPlant.wateringLevel === 'Every 15-21 days') {
        return 2
      } else if (newPlant.wateringLevel === 'Once a month') {
        return 1
      }
    }

    const sunlightFilter = () => {
      if (newPlant.lightType === 'Direct') {
        return 5
      } else if (newPlant.lightType === 'Mainly direct') {
        return 4
      } else if (newPlant.lightType === 'Mixed') {
        return 3
      } else if (newPlant.lightType === 'Mainly indirect') {
        return 2
      } else if (newPlant.lightType === 'Indirect') {
        return 1
      }
    }

    const brightnessFilter = () => {
      if (newPlant.brightType === 'Bright') {
        return 5
      } else if (newPlant.brightType === 'Mainly bright') {
        return 4
      } else if (newPlant.brightType === 'Mixed') {
        return 3
      } else if (newPlant.brightType === 'Mainly low light') {
        return 2
      } else if (newPlant.brightType === 'Low light') {
        return 1
      }
    }

    const seededEaseRating = () => {
      return Math.round((waterCategory() + sunlightFilter() + brightnessFilter()) / 3)
    }
    // console.log('waterCatergory', waterCategory())



    const addedPlant = await Plant.create({
      ...newPlant,
      waterCategory: waterCategory(),
      sunlightFilter: sunlightFilter(),
      brightnessFilter: brightnessFilter(),
      seededEaseRating: seededEaseRating(),
      problems: [
        [
          {
            problem: newPlant.problem1,
            solution: newPlant.solution1,
          }
        ],
        [
          {
            problem: newPlant.problem2,
            solution: newPlant.solution2,
          }
        ],
        [
          {
            problem: newPlant.problem3,
            solution: newPlant.solution3,
          }
        ]
      ],
      addedBy: verifiedUser._id,
    })
    console.log(addedPlant)
    return res.status(201).json(addedPlant)
  } catch (err) {
    console.log('Couldn\'t add this plant, sorry!', err)
    return res.status(400).json(err)
  }
}


// ? PUT REQUESTS
// Edit a Plant
export const changePlant = async (req, res) => {
  const { id } = req.params
  const { body: editPlant, verifiedUser } = req
  try {
    const plantToChange = await Plant.findById(id)
    if (!plantToChange) throw new Error('Plant not found')
    if (!plantToChange.addedBy.equals(verifiedUser._id)) throw new Error('Unauthorised')
    Object.assign(plantToChange, editPlant)

    await plantToChange.save()

    return res.status(200).json(plantToChange)
  } catch (error) {
    return res.status(400).json(error)
  }
}

//? DELETE REQUESTS
// Delete a plant
export const deletePlant = async (req, res) => {
  const { id } = req.params
  try {
    const plantToDelete = await Plant.findById(id)
    // console.log(plantToDelete)

    if (!plantToDelete) throw new Error('Plant not found')
    if (!plantToDelete.addedBy.equals(req.verifiedUser._id)) throw new Error('Unauthorised')

    await plantToDelete.remove()
    return res.sendStatus(204)
  } catch (error) {
    return res.status(400).json(error)
  }
}