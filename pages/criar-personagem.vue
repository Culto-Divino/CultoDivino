<template>
  <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex flex-col justify-center items-center truncate text-white">
    <Header 
    :creation="true" 
    :logged="true" 
    />
    <div class="w-10/12 h-5/6 mt-10 bg-gray-200/25 rounded-xl flex flex-col pc:flex-row pc:flex-wrap pc:justify-center items-center overflow-y-scroll">

      <div class="flex flex-col items-center justify-center w-full">
          <img src="@@/images/no_item_image.jpg" alt="" class="w-7/12 h-80 mt-7 rounded-lg border p-1">
          <label for="input" class="mt-6">Envie aqui a foto do seu personagem!</label>
          <input id="input" type="file" class="file-input file-input-sm file-input-bordered file-input-primary w-full max-w-xs bg-transparent bg-gray-400/75" accept="image/*">
      </div>

      <div class="w-10/12 h-16 flex flex-col mt-5">
        <label for="characterName" class="text-sm pl-2">Nome</label>
        <input id="characterName" type="text" class="h-10 bg-transparent bg-gray-400/75 text-black placeholder:text-gray-700 px-2 text-xl rounded focus:bg-slate-300 outline-none" placeholder="Nome">
      </div>

      <div class="w-10/12 h-16 mt-5 flex items-center justify-between">
        <div class="w-5/12 h-16 flex flex-col">
          <label for="characterAge" class="text-sm">Idade</label>
          <input id="characterAge" type="text" class="h-10 bg-transparent bg-gray-400/75 text-black placeholder:text-gray-700 px-2 text-xl rounded focus:bg-slate-300 outline-none text-center" placeholder="20">
        </div>

        <div class="w-5/12 h-16 flex flex-col relative ">
          <label for="characterGender" class="text-sm">Sexo</label>
          <div class="w-full h-full flex">

            <select id="characterGender" type="text" class="w-full appearance-none h-10 bg-transparent bg-gray-400/75 text-black text-xl border-0 px-2 outline-none rounded">
              <option value="" class="bg-gray-400 text-white" disabled selected>Escolha</option>
              <option key="masculino" class="bg-gray-700/75 text-white selected:bg-red-700" value="masculino">
                Masculino
              </option>
              <option key="feminino" class="bg-gray-700/75 text-white" value="feminino">
                Feminino
              </option>
            </select>

            <div>
              <label for="characterGender" class="absolute right-0 mr-4 mt-2 text-black"><font-awesome-icon icon="fa-solid fa-caret-down" /></label>
            </div>

          </div>
        </div>

      </div>

      <div class="w-10/12 h-16 flex flex-col mt-5">
        <label for="characterElement">Elemento</label>
        <input id="characterElement" type="text" class="h-10 bg-transparent bg-gray-400/75 text-black placeholder:text-gray-700 px-2 text-xl rounded focus:bg-slate-300 outline-none" placeholder="Elemento">
      </div>


      <button 
      class="mt-52 h-12 items-center w-8/12 bg-gradient-to-r from-gray-800 to-slate-900 text-3xl rounded border border border-gray-500 drop-shadow-sm" 
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
    console.log(error)
  }
  const nuxtApp = useNuxtApp()

  const updateSelected = (selected) => {
    selectedArchetype.value = archetypes.find((archetype) => {
      return archetype.name === selected
    })
  }

  async function createCharacter() {
    await navigateTo('/escolha-de-personagem')
  }
</script>
