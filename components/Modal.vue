<!-- eslint-disable vue/attributes-order -->
<template>
    <div id="modal" class="w-full h-full flex items-center justify-center z-10">
        <div class="w-full h-full bg-bgInput flex flex-col items-center justify-center text-white rounded-lg border-4 border-gray-600 z-0">
            <label for="newState" class="text-xl">{{ title }}</label>
            <div class="flex w-full justify-evenly items-center">
                <input type="text" id="newState" class="mt-2 w-9/12 h-10 outline-none bg-transparent bg-gray-500/50 px-2 text-2xl truncate" autocomplete="off">
                <div @click="teste()" class="modal-action mt-0">
                    <label for="my-modal-4" class="w-10 h-10 rounded-full bg-cyan-400/75 flex items-center justify-center"><font-awesome-icon icon="fa-solid fa-paper-plane" class="text-lg" /></label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  defineProps({
    title: String,
  })

  function $(queryString){
    return document.querySelector(queryString)
  }

  function teste(){
    const input = $('#newState')

    const value = input.value

    // eslint-disable-next-line no-console
    console.log(value)

    input.value = ''
  }
</script>
