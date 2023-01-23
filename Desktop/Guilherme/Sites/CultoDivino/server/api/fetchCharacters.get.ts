import { getDocsFromCollection, deleteDocFromCollection } from '../utils/firestore';

export default defineEventHandler(async (event) => {

    const user = event.context.user
    const characters = await getDocsFromCollection(`users/${user.uid}/characters`)
    


    return characters
})