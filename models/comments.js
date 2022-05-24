import mongoose from 'mongoose'

export const commentSchema = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 100 },
  text: { type: String, required: true, maxLength: 350 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  plantName: { type: String },
  plantImg: { type: String },
  plantId: { type: mongoose.Schema.ObjectId },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
}, {
  timestamps: true,
})


