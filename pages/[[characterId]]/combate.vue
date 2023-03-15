<template>
  <div
    id="combatContainer"
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 overflow-y-auto overflow-x-hidden z-0"
  >
    <CharacterHeader class="sticky top-0 z-10" />

    <div class="h-2/4 pc:flex w-full justify-evenly items-center">
      <div class="h-full pc:w-5/12 flex flex-col text-white items-center mt-10">
        <div
          class="pc:w-11/12 w-9/12 h-4/6 flex items-center justify-center text-2xl"
        >
          <CombatData title="Vida" value="99" max-value="99" />
          <CombatData title="Mana" value="99" max-value="99" />
        </div>
        <div
          class="pc:w-11/12 w-9/12 h-4/6 flex items-center justify-center text-2xl"
        >
          <CombatData title="Vigor" value="99" max-value="99" />
          <CombatData title="Sanidade" value="99" max-value="99" />
        </div>

        <div
          class="cel:hidden h-full w-5/12 flex flex-col text-white items-center mt-10"
        >
          <div class="flex w-11/12 h-4/6 items-center justify-center text-2xl">
            <CombatConstData title="Movimento" value="99" />
            <CombatConstData title="Investigação" value="99" />
          </div>
          <div class="flex w-11/12 h-4/6 items-center justify-center text-2xl">
            <CombatConstData title="Bloqueio" value="99" />
            <CombatConstData title="Esquiva" value="99" />
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-states">
      <div class="w-full h-32 flex flex-col justify-center items-center">
        <h1 class="text-3xl text-white">Estados</h1>
        <div
          class="w-10/12 h-16 mt-2 bg-gradient-to-r from-gray-200/25 to-gray-500/50 rounded-md flex justify-between items-center"
        >
          <div
            class="h-5/6 w-10/12 ml-2 truncate text-white flex items-center text-2xl"
          >
            <div
              v-for="state in characterState"
              :key="state"
              @click="removeState(state)"
            >
              <p>{{ state }};</p>
            </div>
          </div>
          <div class="flex justify-items-start m-8 flex-shrink-3">
            <font-awesome-icon
              icon="fa-solid fa-plus"
              class="text-3xl hover:cursor-pointer"
              @click="renderStateModal = !renderStateModal"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-2/4 flex flex-col text-white items-center justify-space-arrmt-10 pc:hidden"
    >
      <div class="flex w-10/12 h-4/6 items-center justify-center text-2xl">
        <CombatConstData title="Movimento" value="99" />
        <CombatConstData title="Investigação" value="99" />
      </div>
      <div class="flex w-10/12 h-4/6 items-center justify-center text-2xl">
        <CombatConstData title="Bloqueio" value="99" />
        <CombatConstData title="Esquiva" value="99" />
      </div>
    </div>
    <div class="wrapper-misc">
      <div
        class="w-full h-24 mb-2 flex items-center justify-between pc:justify-center"
      >
        <button
          class="h-16 w-5/12 ml-5 rounded-md border text-white bg-gradient-to-r from-cyan-700 to-sky-800 text-2xl hover:from-cyan-700/50 hover:to-sky-800/50"
        >
          Consumíveis
        </button>
        <button class="w-5/12 h-16 flex items-center justify-center">
          <img
            src="../../images/dice.png"
            class="w-5/12 pc:w-16 h-16 mr-5"
            alt=""
          />
        </button>
      </div>
    </div>
    <Modal
      :render="renderStateModal"
      @clicked-out="renderStateModal = !renderStateModal"
    >
      <div>
        <input
          id="textBox"
          v-model="state"
          type="text"
          placeholder="Digite o estado aqui..."
          class="mt-2 w-full px-2 h-8 bg-gray-200/25 outline-none rounded"
          @input="addState(state)"
        />
        <button class="">Adicionar</button>
      </div>
    </Modal>
  </div>
</template>

<script setup>
  const characterState = useCharacterState()
  const renderStateModal = ref(true)

  function addState(returnValue) {
    characterState.value.push(capitalizeFirstLetter(returnValue.toLowerCase()))
  }

  function removeState(state) {
    characterState.value.forEach((value, index) => {
      if (value === state) {
        characterState.value.splice(index, 1)
      }
    })
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
</script>
