<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 truncate z-0"
  >
    <div
      class="sticky top-0 w-full h-16 bg-white/75 flex justify-evenly items-center text-black"
    >
      <NuxtLink :to="backLink" class="text-3xl hover:cursor-pointer"
        ><font-awesome-icon
          icon="fa-solid fa-solid fa-arrow-left"
          class="text-3xl hover:cursor-pointer"
      /></NuxtLink>
      <p class="text-3xl">O Culto Divino</p>
      <font-awesome-icon
        icon="fa-solid fa-power-off"
        class="text-3xl hover:cursor-pointer"
        @click="logOut()"
      />
    </div>
    <div id="note">
      <ClientOnly>
        <input
          class="w-full text-center h-12 flex items-center justify-center text-white text-3xl mt-2 bg-transparent outline-none"
          :value="title"
          @change.capture="editedTitle($event.target.value)"
        />

        <div class="w-full h-full flex items-center justify-center">
          <textarea
            class="w-11/12 h-3/4 mb-32 bg-bgNote1/[.85] text-white p-2 outline-none text-2xl drop-shadow-xl"
            :value="content"
            @change.capture="editedContent($event.target.value)"
          ></textarea>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  const characterId = route.params.characterId
  const character = await useCharacter(route.params.characterId)

  const title = ref()
  const content = ref()

  let hasChanged = false

  if (process.client) {
    const note = Object.values(await useNotes(characterId)).find((object) => {
      return route.params.noteId === object._id
    })

    console.log(note)
    title.value = note.title
    content.value = note.content
  }

  function editedTitle(value) {
    hasChanged = true
    title.value = value
  }
  function editedContent(value) {
    hasChanged = true
    content.value = value
  }

  onBeforeRouteLeave(async (next) => {
    try {
      await $fetch('/api/note', {
        method: 'PUT',
        body: {
          title: title.value,
          content: content.value,
          id: route.params.noteId,
        },
      })
    } catch (e) {
      console.error(e)
      return false
    }
  })

  const backLink = `/${route.params.characterId}/anotacoes/`
</script>
