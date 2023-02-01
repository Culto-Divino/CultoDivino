<template>
    <div id="modal" class="w-full h-full flex items-center justify-center z-10">
        <div class="w-full h-full bg-bgInput flex flex-col items-center justify-center text-white rounded-lg border-4 border-gray-600 z-0 text-2xl">
            <div class="w-full h-1/4 flex items-center border-b modal-action mt-0"><label for="my-modal-2" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-regular fa-clipboard" class="ml-3"/> <p class="ml-4">Detalhes</p></label></div>
            <div class="w-full h-1/4 flex items-center border-b modal-action mt-0"><label for="my-modal-1" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-solid fa-box-archive" class="ml-3"/> <p class="ml-4">Mandar p/ Armário</p></label></div>
            <div class="w-full h-1/4 flex items-center border-b modal-action mt-0"><label for="my-modal-1" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-solid fa-right-left" class="ml-3"/> <p class="ml-4">Transferir</p></label></div>
            <div class="w-full h-1/4 flex items-center text-red-700 modal-action mt-0"><label for="my-modal-1" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-regular fa-trash-can" class="ml-3"/> <p class="ml-4">Excluir</p></label></div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: String
})

</script>