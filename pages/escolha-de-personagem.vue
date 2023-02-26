<template>
  <div v-if="!pending">
    <div
      class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex flex-col justify-center items-center truncate text-white"
    >
      <Header :creation="false" :logged="true" />
      <div
        id="default-carousel"
        class="w-10/12 h-4/6 bg-gray-200/25 flex flex-col items-center justify-center rounded-xl"
      >
        <h1 class="text-xl">ESCOLHA DE PERSONAGEM</h1>
        <div class="flex w-8/12 pc:w-10/12 cel:justify-evenly mt-2">
          <input
            type="text"
            name="characterSearch"
            class="w-full pc:w-4/12 pc:ml-5 px-2 bg-transparent bg-gradient-to-r from-cyan-900 to-sky-900 outline-none border-b rounded-full hover:rounded transition duration-2000 ease-in-out"
          />
          <label for="characterSearch"
            ><button @click="search()">
              <font-awesome-icon
                class="ml-3"
                icon="fa-solid fa-magnifying-glass"
              /></button
          ></label>
        </div>
        <div
          class="w-11/12 h-4/6 mt-3 flex items-center flex-wrap justify-evenly overflow-x-hidden scrollbar scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-100/25 scrollbar-thumb-rounded scrollbar-track-rounded"
        >
          <Character
            v-for="character in characters"
            :key="character"
            :data="{
              name: character.name,
              element: character.element,
              image: character.image,
              level: Math.trunc(character.fdv / 20),
              id: character._id,
            }"
            :character-id="character.id"
            class="ml-3 mr-3"
          />
        </div>
      </div>
      <div class="mt-3 w-11/12 h-16 flex items-center justify-center">
        <NuxtLink
          to="/criar-personagem"
          class="w-8/12 h-12 flex items-center justify-center bg-gradient-to-r from-gray-600 to-slate-600 text-2xl"
        >
          + Criar Personagem</NuxtLink
        >
      </div>
    </div>
  </div>
  <div v-else><Loading /></div>
</template>

<script setup>
  definePageMeta({
    middleware: 'auth',
  })

const characters = await $fetch('/api/fetchCharacters', { method: 'get' })
console.log(characters)

</script>
