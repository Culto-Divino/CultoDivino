export default async function () {
  const result = new Promise((resolve, reject) => {
    $fetch('/api/archetypes', {
      method: 'GET',
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e)
      reject(e)
    })
  })

  return await Promise.resolve(result)
}
