<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex flex-col justify-center items-center truncate text-white"
  >
    <Header :creation="true" :logged="true" />
    <div
      class="w-10/12 h-5/6 mt-10 bg-gray-200/25 rounded-xl flex flex-col items-center justify-center overflow-y-scroll"
    >
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
        <input
          id="characterName"
          v-model="name"
          type="text"
          class="h-10 bg-transparent bg-gray-400/75 text-black placeholder:text-gray-700 px-2 text-xl rounded focus:bg-slate-300 outline-none"
          placeholder="Nome"
        />
      </div>
      <div class="w-10/12 h-16 flex flex-col mt-5">
        <label for="characterName" class="text-sm pl-2"
          >Força de vontade: {{ fdv ? fdv : 0 }}% (Nível:
          {{ fdv ? Math.trunc(fdv / 20) : 0 }})</label
        >
        <div class="flex justify-between">
          <input
            id="fdv"
            v-model="fdv"
            type="range"
            min="0"
            max="100"
            step="1"
            class="h-10 w-9/12 bg-transparent bg-gray-400/75 text-black placeholder:text-gray-700 px-2 text-xl rounded-lg focus:bg-slate-300 outline-none range range-primary"
            placeholder="50%"
          />
          <input type="number" value="50" class="w-2/12 h-10 bg-transparent border-b-2 border-slate-500 focus:border-slate-200 px-2 text-xl rounded outline-none text-center focus:appearance-none">
          <p class="h-10 flex items-center justify-center text-xl">%</p>
        </div>
      </div>

      <div
        class="w-full pc:w-10/12 h-2/6 flex flex-col items-center pc:flex-row pc:justify-start pc:items-start"
      >
        <div
          class="w-10/12 pc:w-5/12 h-16 pc:h-full mt-5 flex pc:flex-col items-center justify-between pc:justify-start"
        >
          <div class="w-5/12 pc:w-full h-16 flex flex-col">
            <label for="characterAge" class="text-sm">Idade</label>
            <input
              id="characterAge"
              v-model="age"
              type="number"
              min="0"
              class="h-10 bg-transparent bg-gray-400/75 text-black placeholder:text-gray-700 px-2 text-xl rounded focus:bg-slate-300 outline-none text-center"
              placeholder="20"
            />
          </div>

          <div class="w-5/12 pc:w-full h-16 flex flex-col relative pc:mt-16">
            <label for="characterGender" class="text-sm">Sexo</label>
            <div class="w-full h-full flex">
              <select
                id="characterGender"
                v-model="sex"
                type="text"
                class="w-full appearance-none h-10 bg-transparent bg-gray-400/75 text-black text-xl border-0 px-2 outline-none rounded"
              >
                <option
                  value=""
                  class="bg-gray-400 text-white"
                  disabled
                  selected
                >
                  Escolha
                </option>
                <option
                  key="masculino"
                  class="bg-gray-700/75 text-white"
                  value="Masculino"
                >
                  Masculino
                </option>
                <option
                  key="feminino"
                  class="bg-gray-700/75 text-white"
                  value="Feminino"
                >
                  Feminino
                </option>
              </select>

              <div>
                <label
                  for="characterGender"
                  class="absolute right-0 mr-4 mt-2 text-black"
                  ><font-awesome-icon icon="fa-solid fa-caret-down"
                /></label>
              </div>

            </div>
          </div>
        </div>
        <div class="w-full flex items-center flex-col">
          <div class="w-10/12 h-16 flex flex-col mt-5 relative">
            <label for="characterElement">Elemento</label>
            <select
              id="characterElement"
              v-model="element"
              type="text"
              class="w-full appearance-none h-10 bg-transparent bg-gray-400/75 text-black text-xl border-0 px-2 outline-none rounded"
            >
              <option value="" class="bg-gray-400 text-white" disabled selected>
                Escolha
              </option>
              <option
                key="Orgulho"
                class="bg-gray-700/75 text-white"
                value="Orgulho"
              >
                Orgulho
              </option>
              <option
                key="Ganancia"
                class="bg-gray-700/75 text-white"
                value="Ganância"
              >
                Ganancia
              </option>
              <option
                key="Luxúria"
                class="bg-gray-700/75 text-white"
                value="Luxúria"
              >
                Luxúria
              </option>
              <option
                key="Preguiça"
                class="bg-gray-700/75 text-white"
                value="Preguiça"
              >
                Preguiça
              </option>
              <option
                key="Raiva"
                class="bg-gray-700/75 text-white"
                value="Raiva"
              >
                Raiva
              </option>
              <option key="Gula" class="bg-gray-700/75 text-white" value="gula">
                Gula
              </option>
              <option
                key="Inveja"
                class="bg-gray-700/75 text-white"
                value="Inveja"
              >
                Inveja
              </option>
            </select>
            <div>
                <label
                  for="characterGender"
                  class="absolute right-0 mr-4 top-1/2  text-black"
                  ><font-awesome-icon icon="fa-solid fa-caret-down"
                /></label>
              </div>
          </div>

          <div
            class="flex w-10/12 h-12 items-center justify-evenly text-xl mt-10"
          >
            <DropDownSearch
              title="Arquétipo"
              loading-text="Carregando..."
              select-text="Escolha"
              :elements="archetypeNames"
              @update:selected="updateSelected"
            />
          </div>

          <div class="h-full w-full flex items-center justify-center">
            <button
              class="mt-16 pc:mt-10 ise:mt-32 ise:text-red mb-3 min-h-12 h-12 items-center w-8/12 bg-gradient-to-r from-gray-800 to-slate-900 text-3xl rounded border border border-gray-500 drop-shadow-sm"
              @click="createCharacter()"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: 'auth',
  })

  const fdv = ref()
  const name = ref()
  const age = ref()
  const sex = ref()
  const element = ref()

  const selectedArchetype = ref()
  const archetypeNames = ref([])
  const archetypes = []

  try {
    await useArchetypes().then((result) => {
      console.log(result)
      for (const [key, value] of Object.entries(result)) {
        archetypeNames.value.push(value.name)
        archetypes.push(value)
      }
      console.log(archetypes)
      console.log(archetypeNames.value)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
  const nuxtApp = useNuxtApp()

  const updateSelected = (selected) => {
    selectedArchetype.value = archetypes.find((archetype) => {
      return archetype.name === selected
    })
  }

  async function createCharacter() {
    if (
      !fdv.value ||
      !sex.value ||
      !selectedArchetype.value ||
      !age.value ||
      !name.value ||
      !element.value
    ) {
      console.error('Missing fields!')
    }
    console.log(
      fdv.value,
      sex.value,
      selectedArchetype.value,
      age.value,
      name.value,
      element.value
    )

    await $fetch('/api/character', {
      method: 'POST',
      body: {
        fdv: fdv.value,
        sex: sex.value,
        archetype: selectedArchetype.value,
        age: age.value,
        name: name.value,
        element: element.value,
      },
    })
    await navigateTo('/escolha-de-personagem')
  }
</script>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>