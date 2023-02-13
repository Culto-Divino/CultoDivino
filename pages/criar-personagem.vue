<template>
  <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex flex-col justify-center items-center truncate text-white">
    <Header 
    :creation="true" 
    :logged="true" 
    />
    <div class="w-10/12 h-5/6 mt-10 bg-gray-200/25 rounded-xl flex flex-col pc:flex-row pc:flex-wrap pc:justify-center items-center overflow-y-scroll">

      <div class="flex flex-col items-center justify-center w-full pc:flex-row pc:justify-evenly">
          <img src="@@/images/no_item_image.jpg" alt="" class="w-7/12 pc:w-60 h-80 mt-7 rounded-lg border p-1">
          <div class="flex flex-col">
            <DropZone class="cel:hidden w-full h-64 w-96" label="Envie aqui a foto do seu personagem!" />
            <label for="input" class="mt-6 pc:hidden">Envie aqui a foto do seu personagem!</label>
            <input id="input" type="file" class="pc:hidden file-input file-input-sm file-input-bordered file-input-primary w-full max-w-xs bg-transparent bg-gray-400/75" accept="image/*">
        
          </div>
      </div>

      <div class="w-10/12 h-16 flex flex-col mt-5">
        <label for="characterName" class="text-sm pl-2">Nome</label>
        <input id="characterName" type="text" class="h-10 bg-transparent bg-gray-400/75 text-black placeholder:text-gray-700 px-2 text-xl rounded focus:bg-slate-300 outline-none" placeholder="Nome">
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
      class="mt-16 pc:mt-10 ise:mt-32 ise:text-red mb-3 min-h-12 h-12 items-center w-8/12 bg-gradient-to-r from-gray-800 to-slate-900 text-3xl rounded border border border-gray-500 drop-shadow-sm" 
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
