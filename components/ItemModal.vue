<template>
    <div id="modal" class="w-full h-full flex items-center justify-center z-10">
        <div class="w-full h-full bg-bgInput flex flex-col items-center justify-center text-white rounded-lg border-4 border-gray-600 z-0 text-2xl">

            <NuxtLink :to="itemurl" class="w-full h-1/4 flex items-center border-b modal-action mt-0"><label for="my-modal-1" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-regular fa-clipboard" class="ml-3"/> <p class="ml-4">Detalhes</p></label></NuxtLink>
            <div class="w-full h-1/4 flex items-center border-b modal-action mt-0"><label for="my-modal-1" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-solid fa-box-archive" class="ml-3"/> <p class="ml-4">Mandar p/ Armário</p></label></div>
            <div class="w-full h-1/4 flex items-center border-b modal-action mt-0"><label for="my-modal-2" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-solid fa-right-left" class="ml-3"/> <p class="ml-4">Transferir</p></label></div>
            <div class="w-full h-1/4 flex items-center text-red-700 modal-action mt-0"><label for="my-modal-1" class="w-full h-full flex items-center"><font-awesome-icon icon="fa-regular fa-trash-can" class="ml-3"/> <p class="ml-4">Excluir</p></label></div>
        
          </div>
    </div>

    <input type="checkbox" id="my-modal-2" class="modal-toggle"/>
    <label for="my-modal-2" class="modal cursor-pointer modal-middle cel:modal-bottom">
        <label class="modal-box relative bg-transparent w-10/12 h-3/6 p-2 cel:h-4/6" for="">
          <Modal
          id="2"
          :text-inputs="[
            {
                inputId: 'recievingPlayer',
                labelText: 'Para quem você deseja enviar o item?:',
                type: 'text',
                placeholder: 'Nome'
              }
          ]"
          :button-inputs="[
            {
                id: 'transferItem',
                text: 'TRANSFERIR',
                type: 'close'
            }
          ]"
          />
        </label>
    </label>
</template>

<script setup>

defineProps({
  itemurl: String
})

</script>