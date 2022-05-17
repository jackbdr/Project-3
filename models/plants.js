import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'



const plantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  sciName: { type: String, required: true, unique: true },
})



export default mongoose.model('Plants', plantSchema)