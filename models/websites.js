import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const siteSchema = new mongoose.Schema({
  name: { type: String, required: false },
  overallRating: { type: Number, required: true, unique: true },
  websiteLink: { type: String, required: true },
  price: { type: Number, required: true },
  range: { type: Number, required: true },
  info: { type: Number, required: true },
  quality: { type: Number, required: true },
  id: false,
})

siteSchema.plugin(mongooseUniqueValidator)


export default mongoose.model('Sites', siteSchema)