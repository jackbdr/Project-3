import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const siteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  overallRating: { type: Number, required: true },
  websiteLink: { type: String, required: true },
  price: { type: Number, required: true },
  range: { type: Number, required: true },
  info: { type: Number, required: true },
  quality: { type: Number, required: true },
  id: false,
})

siteSchema.plugin(mongooseUniqueValidator)


export default mongoose.model('Sites', siteSchema)