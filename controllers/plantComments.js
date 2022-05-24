import Plant from '../models/plants.js'
import User from '../models/users.js'

// Adding comments - POST request
export const addCommentToPlant = async (req, res) => {
  const { id } = req.params
  try {
    console.log('hit the comment route')
    const plantToUpdate = await Plant.findById(id)

    if (!plantToUpdate) throw new Error('Plant not found')
    // Creating a comment with owner
    const commentWithOwner = { ...req.body, addedBy: req.verifiedUser._id }
    console.log(req.body)
    // Adding commentWithOwner to the array
    plantToUpdate.comments.push(commentWithOwner)
    // Save updated comment
    await plantToUpdate.save()

    // Adding Comment to the User 
    const userToComment = await User.findById(req.verifiedUser._id)
    userToComment.comments.push(req.body)
    await userToComment.save()




    return res.status(200).json({ message: 'addComment worked' })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}
