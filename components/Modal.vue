<template>
  <div id="content" class="w-screen h-screen">
    <div
      id="modalBackground"
      class="absolute t-0 l-0 w-screen h-screen bg-black/50 z-10 flex items-center justify-center"
      @click="
        hideModal()
      "
    ></div>
    <div id="modal" class="w-screen h-screen flex items-center justify-center">
      <div
        class="w-10/12 h-2/6 bg-bgInput flex flex-col items-center justify-center text-white rounded-lg border-4 border-gray-600 z-20"
      >
        <label for="newState" class="text-xl">{{ title }}</label>
        <div class="flex w-full justify-evenly items-center">
          <input
            id="newState"
            type="text"
            class="mt-2 w-9/12 h-10 outline-none bg-transparent bg-gray-500/50 px-2 text-2xl truncate"
          />
          <button
            class="w-10 h-10 rounded-full bg-cyan-400/75"
            @click="hideModal()"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
  })
  defineEmits(['someEvent'])

    function hideModal(){
        location.reload()
    }

</script>
