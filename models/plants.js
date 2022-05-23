import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const plantSchema = new mongoose.Schema({
  seed: { type: Number, required: false },
  name: { type: String, required: true, unique: true },
  sciName: { type: String, required: true, unique: true },
  imageTrans: { type: String, required: true },
  imageHome: { type: String, required: true },
  imageWild: { type: String, required: true },
  origin: { type: String, required: true },
  wateringLevel: { type: String, required: true },
  waterCategory: { type: Number, required: true },
  wateringDetail: { type: String, required: false },
  tempRange: { type: String, required: true },
  tempCategory: { type: String, required: false },
  tempDetail: { type: String, required: false },
  lightDetail: { type: String, required: false },
  lightType: { type: String, required: true },
  sunlightFilter: { type: Number, required: true },
  brightType: { type: String, required: true },
  brightnessFilter: { type: Number, required: true },
  fertilizer: { type: String, required: false },
  pruning: { type: String, required: false },
  problems: [
    [
      {
        problem: { type: String, required: true },
        solution: { type: String, required: true },
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
  maxGrowth: { type: String, required: true },
  annualGrowth: { type: String, required: false },
  poisonous: { type: String, required: true },
  linkToBuy: { type: String, required: false },
  seededEaseRating: { type: Number, required: true },
  description: { type: String, required: true },
  priceRange: { type: String, required: true },
  categorisation: { type: String, required: false },
  favourited: [{ type: String, required: false }],
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  id: false,
  seededSays: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

plantSchema.plugin(mongooseUniqueValidator)


export default mongoose.model('Plant', plantSchema)