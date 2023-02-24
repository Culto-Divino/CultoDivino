import mongoose from 'mongoose'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Conectar com o mongo
  const config = useRuntimeConfig()

  console.log('Aqui!')

  mongoose.set('strictQuery', false)

  console.log('$ Connecting to mongo database...')

  await mongoose
    .connect(
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@sao-paulo-1.kqrbq5v.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log('$ Connected!'))
    .catch((e) => console.log('$ Failed to connect to mongo. ', e))
})
