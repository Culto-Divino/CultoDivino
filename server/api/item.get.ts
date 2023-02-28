import { itemModel } from "~~/mongo/models/characterModel"

export default defineEventHandler(async (event) => {
    const itemId = getHeader(event, 'Item-Id')

    let item

    try {
        item = (await itemModel.findById(itemId))
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error fetching items: ', e)
        event.node.res.statusCode = 500
        event.node.res.end(JSON.stringify({ message: e }))
        return
    }
    event.node.res.statusCode = 200
    event.node.res.end(JSON.stringify(item))
})
