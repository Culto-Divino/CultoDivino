import characterModel from "~~/mongo/models/characterModel"

export default defineEventHandler(async (event) => {
    const characterId = getHeader(event, 'Character-Id')

    let character

    try {
        character = (await characterModel.findById(characterId))
        await character.populate('inventory')
        await character.populate('locker')
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error fetching items: ', e)
        event.node.res.statusCode = 500
        event.node.res.end(JSON.stringify({ message: e }))
        return
    }
    event.node.res.statusCode = 200
    event.node.res.end(JSON.stringify({ inventory: character.inventory, locker: character.locker }))
})
