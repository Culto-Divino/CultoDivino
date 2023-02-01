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
        <label for="my-modal-4" class="w-12 h-12 mr-2">
          <p
            class="flex items-center justify-center text-6xl rounded-full bg-white h-full text-black"
          >
            +
          </p>
        </label>
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

    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer modal-center cel:modal-bottom">
        <label class="modal-box relative bg-transparent w-10/12 h-2/6 max-h-4/6 p-2" for="">
          <Modal 
            :text-inputs="[
              {
                inputId: 'newState',
                labelText: 'Digite aqui o seu novo estado:',
                type: 'text',
                placeholder: 'Novo estado...'
              }
            ]"
            :button-inputs="[
              {
                id: 'addState',
                text: 'ADICIONAR',
                class: 'success'
              }
            ]"
          />
        </label>
    </label>
  </div>
</template>

<script setup></script>
