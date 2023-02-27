export const useSelectedCharacter = () => useState<object>('selectedCharacter', () => { return {} })


export default async function (id) {
  const result = new Promise((resolve, reject) => {
    const selectedCharacter = useSelectedCharacter()

    // Salva uma chamada para o servidor!
    // @ts-expect-error, _id existirá se houver um personagem selecionado
    if (selectedCharacter.value._id === id) {
      resolve(selectedCharacter.value)
    }

    $fetch('/api/character', {
      method: 'GET',
      headers: { 'Character-Id': `${id}` },
    }).then((res) => {
      // @ts-expect-error, res will always be object
      selectedCharacter.value = { ...res }
      resolve(selectedCharacter.value)
    }).catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e)
      reject(e)
    })
  })

  return await Promise.resolve(result)
}
