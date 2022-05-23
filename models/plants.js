import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const plantSchema = new mongoose.Schema({
  seed: { type: Number, required: false },
  name: { type: String, required: true, unique: true },
  sciName: { type: String, required: true, unique: true },
  imageTrans: { type: String, required: false },
  imageHome: { type: String, required: true },
  imageWild: { type: String, required: false },
  origin: { type: String, required: true },
  wateringLevel: { type: String, required: false },
  waterCategory: { type: Number, required: false },
  wateringDetail: { type: String, required: false },
  tempRange: { type: String, required: false },
  tempCategory: { type: String, required: false },
  tempDetail: { type: String, required: false },
  lightDetail: { type: String, required: false },
  lightType: { type: String, required: false },
  sunlightFilter: { type: Number, required: false },
  brightType: { type: String, required: false },
  brightnessFilter: { type: Number, required: false },
  fertilizer: { type: String, required: false },
  pruning: { type: String, required: false },
  problems: [
    [
      {
        problem: { type: String, required: false },
        solution: { type: String, required: false },
      }
    ],
    [
      {
        problem: { type: String, required: false },
        solution: { type: String, required: false },
      }
    ],
    [
      {
        problem: { type: String, required: false },
        solution: { type: String, required: false },
      }
    ]
  ],
  maxGrowth: { type: String, required: false },
  annualGrowth: { type: String, required: false },
  poisonous: { type: String, required: false },
  linkToBuy: { type: String, required: false },
  seededEaseRating: { type: Number, required: false },
  description: { type: String, required: true },
  priceRange: { type: String, required: false },
  categorisation: { type: String, required: false },
  favourited: [{ type: String, required: false }],
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  id: false,
  seededSays: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
})

plantSchema.plugin(mongooseUniqueValidator)


export default mongoose.model('Plant', plantSchema)