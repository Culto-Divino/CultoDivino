import { noteModel } from "~~/mongo/models/characterModel"

export default defineEventHandler(async (event) => {
    const { title, content, id } = await readBody(event)

    try {
        await noteModel.findById(id).updateOne({ title, content })

    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error adding note: ', e)
        event.node.res.statusCode = 500
        event.node.res.end(JSON.stringify({ message: e }))
        return
    }
    event.node.res.statusCode = 200
    event.node.res.end(JSON.stringify({ message: 'Successfully updated note content!' }))
})
