/* eslint-disable no-console */
import mongoose from 'mongoose'

export default defineNuxtPlugin(async () => {
  // Conectar com o mongo
  const config = useRuntimeConfig()

  mongoose.set('strictQuery', false)

  console.log('$ Connecting to mongo database...')

  if (!config.MONGO_URI) {
    await mongoose
      .connect(
        `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@sao-paulo-1.kqrbq5v.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => console.log('$ Connected!'))
      .catch((e) => console.log('$ Failed to connect to mongo. ', e))

    return
  }

  await mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log('$ Connected!'))
    .catch((e) => console.log('$ Failed to connect to mongo. ', e))

})
