<template>
  <div
    id="combatContainer"
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 overflow-y-scroll overflow-x-hidden z-0"
  >
    <CharacterHeader class="sticky top-0 z-10" />

    <div class="h-2/4 flex flex-col text-white items-center mt-10">
      <div class="flex w-9/12 h-4/6 flex items-center justify-center text-2xl">
        <CombatData title="Vida" value="99" max-value="99" />
        <CombatData title="Mana" value="99" max-value="99" />
      </div>
      <div class="flex w-9/12 h-4/6 flex items-center justify-center text-2xl">
        <CombatData title="Vigor" value="99" max-value="99" />
        <CombatData title="Sanidade" value="99" max-value="99" />
      </div>
    </div>
    <div class="w-full h-32 flex flex-col justify-center items-center">
      <h1 class="text-3xl text-white">Estados</h1>
      <div
        class="w-10/12 h-16 mt-2 bg-gradient-to-r from-gray-200/25 to-gray-500/50 rounded-md flex justify-between items-center"
      >
        <div
          class="h-5/6 w-10/12 ml-2 truncate text-white flex items-center text-2xl"
        >
          Morrendo, Congelado
        </div>
        <button class="h-12 w-12 mr-2" @click="addState()">
          <p
            class="flex items-center justify-center text-6xl rounded-full bg-white h-full"
          >
            +
          </p>
        </button>
      </div>
    </div>
    <div class="h-2/4 flex flex-col text-white items-center mt-10">
      <div class="flex w-10/12 h-4/6 flex items-center justify-center text-2xl">
        <CombatConstData title="Movimento" value="99" />
        <CombatConstData title="Investigação" value="99" />
      </div>
      <div class="flex w-10/12 h-4/6 flex items-center justify-center text-2xl">
        <CombatConstData title="Bloqueio" value="99" />
        <CombatConstData title="Esquiva" value="99" />
      </div>
    </div>
    <div class="w-full h-24 mb-2 flex items-center justify-between">
      <button
        class="h-16 w-5/12 ml-5 rounded-md border text-white bg-gradient-to-r from-cyan-700 to-sky-800 text-2xl"
      >
        Consumíveis
      </button>
      <button class="w-5/12 h-16 flex items-center justify-center">
        <img src="../../images/dice.png" class="w-5/12 h-16 mr-5" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
  async function addState() {
    const foo = document.querySelector('#combatContainer')

    const appContext = getCurrentInstance()

    renderComponent({
      el: foo,
      component: (await import('~~/components/Modal.vue')).default,
      props: {
        title: 'Digite aqui o seu estado:',
      },
      appContext,
    })
  }
</script>

<!-- <font-awesome-icon class="w-5/12 h-16 text-6xl text-white" icon="fa-solid fa-dice-five" /> -->
