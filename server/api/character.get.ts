import characterModel from "~~/mongo/models/characterModel"

export default defineEventHandler(async (event) => {
    const characterId = getHeader(event, 'Character-Id')

    let character

    try {
        character = await (await characterModel.findById(characterId)).populate('archetype')
        character.populate('archetype')
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error fetching character: ', e)
        event.node.res.statusCode = 500
        event.node.res.end(JSON.stringify({ message: e }))
    }
    event.node.res.statusCode = 200
    event.node.res.end(JSON.stringify(character))
})
