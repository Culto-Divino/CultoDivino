export default async function () {
  const archetypes = useArchetypes()

  const nuxtApp = useNuxtApp()

  // Buscar arquétipos no servidor
  const { data: res, error } = await useLazyAsyncData(
    'res',
    () =>
      $fetch('/api/archetypes', {
        method: 'GET',
      }),
    { server: false }
  )
  return new Promise((resolve, reject) => {
    watch(res, () => {
      if (error.value) {
        reject(error.value)
      }

      // @ts-expect-error , o resultado sempre terá um valor "docs"
      archetypes.value = [...res.value.docs]
      resolve(archetypes)
    })
  })
}
