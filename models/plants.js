import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'



const plantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  sciName: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  origin: { type: String, required: true },
  watering: { type: String, required: true },
  temp: { type: String, required: true },
  tempDetail: { type: String, required: true },
  light: { type: String, required: true },
  fertilizer: { type: String, required: true },
  pruning: { type: String, required: true },
  problems:
    { prob1: { type: String },
      prob2: { type: String },
      prob3: { type: String },
    },
  solutions: [ 
    {
      sol1: { type: String },
      sol2: { type: String },
      sol3: { type: String },
    }
  ],
  maxGrowth: { type: String, required: true },
  annualGrowth: { type: String, required: true },
  poisonous: { type: String, required: true },
  easeRating: { type: Number, required: true },
  description: { type: String, required: true },
  priceRange: { type: String, required: true },
  buyLink: { type: String, required: true },
  addedBy: { type: mongoose.Schema.objectId, ref: 'User', required: true },
  id: false,
})



export default mongoose.model('Plant', plantSchema)