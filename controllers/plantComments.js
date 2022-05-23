import Plant from '../models/plants.js'


// Adding comments - POST request

export const addCommentToPlant = async (req, res) => {

  const { id } = req.params

  try {
    console.log('hit the comment route')
    const plantToUpdate = await Plant.findById(id)

    if (!plantToUpdate) throw new Error('Plant not found')

    // Creating a comment with owner
    const commentWithOwner = { ...req.body, addedBy: req._id }

    // Adding commentWithOwner to the array
    plantToUpdate.comments.push(commentWithOwner)

    // Save updated comment
    await plantToUpdate.save()

    return res.status(200).json({ message: 'addComment worked' })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}