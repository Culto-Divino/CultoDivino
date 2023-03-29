import mongoose from 'mongoose'
const Schema = mongoose.Schema

const itemsSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, default: 'Esse item não possui uma descrição!' },
    weight: { type: Number, required: true },
    types: { type: [String], default: [] },
    isUnique: { type: Boolean, default: false }
})

const itemModel = mongoose.model('items', itemsSchema)

export default itemModel