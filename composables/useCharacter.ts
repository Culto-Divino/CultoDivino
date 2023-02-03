export default async function (id) {
  const selectedCharacter = useSelectedCharacter()

  // Salva uma chamada para o servidor!
  if (selectedCharacter.value.id === id) {
    return new Promise((resolve) => {
      resolve(selectedCharacter)
    })
  }

  // Caso tenha mudado de personagem, faça o procedimento normal
  const { data: res, error } = await useAsyncData(
    'res',
    () =>
      $fetch('/api/character', {
        method: 'GET',
        headers: { 'Character-Id': `${id}` },
      }),
    { server: false }
  )

  return new Promise((resolve, reject) => {
    if (error.value) {
      reject(error.value)
    }

    // @ts-expect-error , o resultado sempre terá um valor "doc"
    selectedCharacter.value = { ...res.value.doc }
    resolve(selectedCharacter)
  })
}
