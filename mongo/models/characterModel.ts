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

const itemsSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, default: 'Esse item não possui uma descrição!' },
  weight: { type: Number, required: true },
  types: { type: [String], default: [] },
  isUnique: { type: Boolean, default: false }
})

const characterSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  fdv: { type: Number, required: true, min: 0 },
  element: { type: String, required: true },
  maxWeight: { type: Number, default: 10 },
  archetype: { type: mongoose.Types.ObjectId, ref: 'archetypes', required: true },
  notes: { type: [mongoose.Types.ObjectId], ref: 'notes', default: [] },
  documents: { type: [mongoose.Types.ObjectId], ref: 'docs', default: [] },
  inventory: { type: [mongoose.Types.ObjectId], ref: 'items' },
  locker: { type: [mongoose.Types.ObjectId], ref: 'items' },
  devMode: { type: Boolean, default: false },
  canTrade: { type: Boolean, default: true }
})

characterSchema.virtual('level').get(function () {
  return Math.trunc(this.fdv / 20)
})

characterSchema.method('addNote', async function (title: string, content: string) {
  const note = await noteModel.create({
    title,
    content
  })
  this.notes.push(note._id)
  await this.save()

  return note._id
})

characterSchema.method('transferToLocker', function (itemId: string) {

  let itemIndex
  const inventoryItem = this.inventory.find((item, index) => {
    if (item === itemId) {
      itemIndex = index
      return true
    }
    return false
  })
  this.locker.push(inventoryItem)
  this.inventory.splice(itemIndex, 1)
})

characterSchema.method('transferToInventory', function (itemId: string) {

  let itemIndex
  const locker = this.locker.find((item, index) => {
    if (item === itemId) {
      itemIndex = index
      return true
    }
    return false
  })
  this.inventory.push(locker)
  this.locker.splice(itemIndex, 1)
})


const noteModel = mongoose.model('notes', noteSchema)
const docModel = mongoose.model('docs', docSchema)
const characterModel = mongoose.model('characters', characterSchema)
const itemModel = mongoose.model('items', itemsSchema)

export default characterModel
export { noteModel, docModel, itemModel }