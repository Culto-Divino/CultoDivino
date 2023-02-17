import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  id: mongoose.Types.ObjectId,
  email: String,
  password: String,
  token: String,
  tokenExpiration: Number,
})

const userModel = mongoose.model('users', userSchema)

export default userModel
