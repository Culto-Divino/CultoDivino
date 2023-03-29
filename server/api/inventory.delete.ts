import characterModel from "~~/mongo/models/characterModel"

export default defineEventHandler(async (event) => {
    const characterId = getHeader(event, 'Character-Id')
    const location = getHeader(event, 'Item-Location')
    const itemId = getHeader(event, 'Item-Id')

    let character

    try {
        character = (await characterModel.findById(characterId))
        if (location === 'locker') {
            character.locker.find((element, index) => {
                if (element === itemId) {
                    character.locker.splice(1, index)
                    return true
                }

                return false
            })
            character.save()
        }
        if (location === 'inventory') {
            character.inventory.find((element, index) => {
                if (element === itemId) {
                    character.inventory.splice(1, index)
                    return true
                }

                return false
            })
            character.save()
        }
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
