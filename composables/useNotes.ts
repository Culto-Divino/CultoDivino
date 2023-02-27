export const useGetNotes = () => useState('notes', () => [])

export default async function (id) {
    const result = new Promise((resolve, reject) => {
        const notes = useGetNotes()

        // Salva uma chamada para o servidor!
        $fetch('/api/note', {
            method: 'GET',
            headers: { 'Character-Id': `${id}` },
        }).then((res) => {
            // @ts-expect-error, res will always be object
            notes.value = { ...res }
            console.log(notes.value)
            resolve(notes.value)
        }).catch((e) => {
            // eslint-disable-next-line no-console
            console.error(e)
            reject(e)
        })
    })

    return await Promise.resolve(result)
}


