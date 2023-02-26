import mongoose from 'mongoose'
const Schema = mongoose.Schema

const archetypeSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    parentClass: { type: Object, required: true }
})

const archetypeModel = mongoose.model('archetypes', archetypeSchema)

export default archetypeModel