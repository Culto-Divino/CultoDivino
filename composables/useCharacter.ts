export default async function (id){
  return new Promise(async (resolve, reject) => {
    const selectedCharacter = useSelectedCharacter

    if(selectedCharacter.value.id == id){
      resolve(selectedCharacter)
    }
    else {
      let { data: res, error } = await useAsyncData(
        "res",
        () => $fetch("/api/get-character", { method: "GET", headers: { "Character-Id" : `${id}` } }),
        { server: false }
      );
      if (error.value){
        reject({ error: error})
      }

      // @ts-expect-error
      selectedCharacter.value = { ...res.value.doc }
      resolve(selectedCharacter)
    }
  })
}   