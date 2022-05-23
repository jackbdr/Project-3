import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const favoriteSchema = new mongoose.Schema({
  plantId: { type: mongoose.Schema.ObjectId, ref: 'Plant', required: true },
})



const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // favorites: [
  //   { type: mongoose.Schema.ObjectId }
  // ],
  id: false,
  favorites: [favoriteSchema],
  dateJoined: { type: Date, default: Date.now },
})

// // ? reverse relationships 
// userSchema.virtual('favorites', {
//   ref: 'Plant',
//   localField: '_id',
//   foreignField: 'favoritedBy',
// })

// Anytime userSchema is passed back to JSON, password is deleted
userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    return json
  },
})

// Creates virtual key with value of whatever user has passed through in the req.body.passwordConfirmation
userSchema
  .virtual('passwordConfirmation')
  .set(function (value) {
    this._passwordConfirmation = value
  })

// Checks to see if passwords match
userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Passwords do not match.')
    }
    next()
  })

// Whenever someone registers, or changes password, save bcrypt version of password
userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
    }
    next()
  })

// Create own method which checks if password passed through matches password on account
userSchema.methods.validatePassword = function (plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password)
}

userSchema.plugin(mongooseUniqueValidator)

export default mongoose.model('User', userSchema)

