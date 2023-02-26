import mongoose from 'mongoose'
const Schema = mongoose.Schema

const noteSchema = new Schema({
  id: mongoose.Types.ObjectId,
  title: { type: String, required: true },
  content: { type: String, required: true },
})

const docSchema = new Schema({
  id: mongoose.Types.ObjectId,
  title: { type: String, required: true },
  file: { type: String, required: true },
})

const characterSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  fdv: { type: Number, required: true, min: 0 },
  element: { type: String, required: true },
  archetype: { type: mongoose.Types.ObjectId, ref: 'archetypes', required: true },
  notes: { type: [mongoose.Types.ObjectId], ref: 'notes' },
  documents: { type: [mongoose.Types.ObjectId], ref: 'docs' },
  devMode: Boolean
})

characterSchema.virtual('level').get(function () {
  return Math.trunc(this.fdv / 20)
})


const noteModel = mongoose.model('notes', noteSchema)
const docModel = mongoose.model('docs', docSchema)
const characterModel = mongoose.model('characters', characterSchema)

export default characterModel
export { noteModel, docModel }