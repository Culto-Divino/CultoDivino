<template>
    <div id="modalBackground" v-on:click="hide()" class="absolute t-0 l-0 w-screen h-screen bg-black/50 z-10 flex items-center justify-center">
    </div>
    <div id="modal" class="w-screen h-screen flex items-center justify-center">
        <div class="w-10/12 h-2/6 bg-bgInput flex flex-col items-center justify-center text-white rounded-lg border-4 border-gray-600 z-20">
            <label for="newState" class="text-xl">{{ title }}</label>
            <input type="text" id="newState" class="mt-2 w-9/12 h-10 outline-none bg-transparent bg-gray-500/50 px-2 text-2xl truncate">
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        title: String
    })


    function hide(){
        let modalBackground = document.querySelector('#modalBackground')
        let modal = document.querySelector('#modal')

        modalBackground.classList.remove('absolute')
        modalBackground.classList.add('hidden')

        modal.classList.add('hidden')
    }

</script>