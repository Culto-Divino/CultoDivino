<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex flex-col justify-center items-center truncate text-white"
  >
    <Header :creation="true" :logged="true" />
    <div
      class="w-10/12 h-5/6 mt-10 bg-gray-200/25 rounded-xl flex flex-col items-center justify-center overflow-y-scroll"
    >
      <div class="flex w-10/12 h-12 items-center justify-evenly text-xl">
        <p>Nome:</p>
        <input type="text" class="bg-transparent border-b px-2 outline-none" />
      </div>
      <div class="flex w-10/12 h-12 items-center justify-evenly text-xl">
        <p>Idade:</p>
        <input type="text" class="bg-transparent border-b px-2 outline-none" />
      </div>
      <div class="flex w-10/12 h-12 items-center justify-evenly text-xl">
        <p>Sexo:</p>
        <select type="text" class="bg-transparent border-b px-2 outline-none">
          <option key="masculino" class="text-black" value="masculino">
            Masculino
          </option>
          <option key="feminino" class="text-black" value="feminino">
            Feminino
          </option>
        </select>
      </div>
      <div class="flex w-10/12 h-12 items-center justify-evenly text-xl">
        <p>Elemento:</p>
        <input type="text" class="bg-transparent border-b px-2 outline-none" />
      </div>
      <div class="flex w-10/12 h-12 items-center justify-evenly text-xl">
        <DropDownSearch
          title="Arquétipos"
          loading-text="Carregando!"
          select-text="Selecione um"
          :elements="archetypeNames"
          @update:selected="updateSelected"
        />
      </div>
      <div class="flex flex-col w-10/12 h-32">
        <label for="image" class="block mb-2 text-lg text-white"
          ><font-awesome-icon icon="fa-solid fa-image" /> Imagem</label
        >
        <input
          type="file"
          class="block w-full h-8 text-md text-gray-400 border border-gray-600 rounded-lg cursor-pointer bg-gray-700 focus:outline-none placeholder-gray-400"
        />
        <p id="file_input_help" class="mt-1 text-sm text-gray-300">
          PNG, JPG ou GIF.
        </p>
      </div>

      <button
        class="h-12 items-center w-8/12 bg-gradient-to-r from-gray-800 to-slate-900 text-3xl rounded border border border-gray-500 drop-shadow-sm"
        @click="createCharacter()"
      >
        Confirmar
      </button>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: 'auth',
  })

  const selectedArchetype = ref()
  const archetypeNames = ref()
  let archetypes = []

  try {
    useGetArchetypes().then((result) => {
      archetypes = result.value

      archetypeNames.value = result.value.map((doc) => {
        return doc.name
      })
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
  // const nuxtApp = useNuxtApp()

  const updateSelected = (selected) => {
    selectedArchetype.value = archetypes.find((archetype) => {
      return archetype.name === selected
    })
  }

  async function createCharacter() {
    await navigateTo('/escolha-de-personagem')
  }
</script>
