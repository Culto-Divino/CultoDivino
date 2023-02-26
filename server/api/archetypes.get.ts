import archetypeModel from "~~/mongo/models/archetypeModel"

export default defineEventHandler(async (event) => {
    let archetypes
    try {
        archetypes = await archetypeModel.find()
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error fetching archetypes', e)
        event.node.res.statusCode = 500
        event.node.res.end(JSON.stringify({ message: 'Failed to fetch archetypes.' }))
    }

    event.node.res.statusCode = 200
    event.node.res.end(JSON.stringify(archetypes))
})
