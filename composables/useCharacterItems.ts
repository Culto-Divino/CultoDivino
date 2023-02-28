export const characterInventory = () => useState<object>('characterInventory', () => { return {} })


export default async function (id) {
    const result = new Promise((resolve, reject) => {
        const characterInventory = useSelectedCharacter()

        $fetch('/api/inventory', {
            method: 'GET',
            headers: { 'Character-Id': `${id}` },
        }).then((res) => {
            // @ts-expect-error, res will always be object
            characterInventory.value = { ...res }
            resolve(characterInventory.value)
        }).catch((e) => {
            // eslint-disable-next-line no-console
            console.error(e)
            reject(e)
        })
    })

    return await Promise.resolve(result)
}
