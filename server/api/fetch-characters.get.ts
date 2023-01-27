import { getDocsFromCollection, deleteDocFromCollection } from '../utils/firestore';

export default defineEventHandler(async (event) => {

    const user = event.context.userCookie

    const characters = await getDocsFromCollection(`users/${user.uid}/characters`)

    event.node.res.statusCode = 200
    event.node.res.end(JSON.stringify(characters))
})