import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const plantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  sciName: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  origin: { type: String, required: true },
  wateringLevel: { type: String, required: true },
  wateringCategory: { type: String, required: true },
  tempRange: { type: String, required: true },
  tempCategory: { type: String, required: true },
  lightType: { type: String, required: true },
  brightType: { type: String, required: true },
  problems: [
    { brownLeaves: { type: String },
      yellowLeaves: { type: String },
      blackLeaves: { type: String },
      baseRot: { type: String },
      leafWilting: { type: String },
      bugs: { type: String },
      leafLoss: { type: String },
    }
  ],
  otherProblems: [ 
    {
      problem: { type: String },
      solution: { type: String },
    }
  ],
  maxGrowth: { type: String, required: true },
  annualGrowth: { type: String, required: true },
  poisonous: { type: String, required: true },
  easeRating: { type: Number, required: true },
  description: { type: String, required: true },
  priceRange: { type: String, required: true },
  buyLink: { type: String, required: true },
  // addedBy: { type: mongoose.Schema.objectId, ref: 'User', required: true },
  id: false,
  seededSays: { type: String, required: true },
})



export default mongoose.model('Plant', plantSchema)