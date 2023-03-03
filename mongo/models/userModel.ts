import crypto from 'crypto'
import mongoose from 'mongoose'

const config = useRuntimeConfig()

const Schema = mongoose.Schema

const userSchema = new Schema({
  id: mongoose.Types.ObjectId,
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: { type: String, required: true },
  token: {
    type: String, default: () => {
      return crypto
        .createHash('sha256')
        .update(`${Date.now()} ${process.uptime() / 19}`)
        .digest('hex')
    }
  },
  tokenExpiration: {
    type: Number, default: () => {
      return Date.now() + Number(config.TOKEN_VALIDITY_TIME_DAYS) * 24 * 60 * 60 * 1000
    }
  },
  characters: {
    type: [mongoose.Types.ObjectId],
    ref: 'characters'
  }
})

const generatePasswordHash = function (password: string) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

userSchema.methods.verifyPassword = function (password: string) {
  const passwordHash = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex')

  return passwordHash === this.password
}
userSchema.methods.generateUserAuthToken = function () {
  const token = crypto
    .createHash('sha256')
    .update(`${Date.now()} ${process.uptime() / 19}`)
    .digest('hex')
  const tokenExpiration =
    Date.now() + Number(config.TOKEN_VALIDITY_TIME_DAYS) * 24 * 60 * 60 * 1000
  this.token = token
  this.tokenExpiration = tokenExpiration
  this.save()

  return { token, tokenExpiration }
}

userSchema.methods.verifyUserAuthToken = function (userClaim: string) {
  if (Date.now() >= this.tokenExpiration || userClaim !== this.token) {
    return false
  }
  return true
}

userSchema.methods.addCharacter = function (character: mongoose.Types.ObjectId) {
  this.characters.push(character)
  this.save()
}

const userModel = mongoose.model('users', userSchema)

export default userModel
export { generatePasswordHash }
