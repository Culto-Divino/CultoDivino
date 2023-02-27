import characterModel from "~~/mongo/models/characterModel"

export default defineEventHandler(async (event) => {
    const characterId = getHeader(event, 'Character-Id')
    const { title, content } = await readBody(event)

    let noteId;

    try {
        // @ts-expect-error, addNote é um método definido em characterModel.
        noteId = await (await characterModel.findById(characterId)).addNote(title, content)

    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error adding note: ', e)
        event.node.res.statusCode = 500
        event.node.res.end(JSON.stringify({ message: e }))
    }
    event.node.res.statusCode = 200
    event.node.res.end(JSON.stringify({ id: noteId._id }))
})
