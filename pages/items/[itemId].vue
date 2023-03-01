<template>
  <div
    v-if="!pending"
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 overflow-y-scroll overflow-x-hidden z-0 flex flex-col justify-center items-center break-words"
  >
    <Header class="truncate" />

    <div
      class="w-11/12 h-5/6 flex flex-col items-center mt-10 overflow-y-auto pc:items-start pc:scrollbar pc:scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-100/25 scrollbar-thumb-rounded scrollbar-track-rounded"
    >
      <div class="w-full flex flex-col items-center justify-center pc:flex-row">
        <img
          class="aspect-square w-8/12 pc:w-3/12 rounded-lg border p-1"
          src="https://a-static.mlcdn.com.br/800x560/caixa-de-som-jbl-charge-5-bluetooth-portatil-40w-com-tweeter/magazineluiza/228567500/9cccadaf1da66ac5328ff5be7666bb93.jpg"
          alt=""
        />

        <p class="mt-5 text-4xl pc:mt-0 pc:ml-10">{{ item.name }}</p>
      </div>
      <div class="w-full flex cel:flex-col justify-evenly">
        <div
          class="w-full h-20 mt-5 flex items-center justify-evenly pc:flex-col pc:mt-5 pc:items-start h-full pc:w-3/12"
        >
          <div
            class="w-5/12 h-20 bg-black/50 flex flex-col rounded-md border border-sky-500 pc:mt-3 pc:w-full"
          >
            <p class="w-full h-2/5 pl-2">Espaço:</p>
            <p class="w-full h-full flex items-center justify-center text-2xl">
              {{ item.weight }}
            </p>
          </div>
        </div>

        <div
          class="w-full h-80 mt-5 flex flex-col items-center justify-center pc:w-8/12"
        >
          <h1 class="text-xl pc:hidden">Descrição</h1>
          <textarea
            name=""
            class="w-full h-80 mt-5 bg-black/50 rounded-lg border border-sky-500 outline-none p-2 break-all"
            disabled
            :value="item.description"
          >
          </textarea>
        </div>
      </div>

      <div
        v-if="characterId && redirected"
        class="w-full h-16 mt-5 flex items-center justify-evenly"
      >
        <label for="my-modal-5" class="h-16 w-5/12"
          ><div
            class="w-full h-full bg-green-600 rounded flex items-center justify-center text-xl cursor-pointer"
          >
            ADICIONAR
          </div></label
        >
        <NuxtLink
          :to="returnURL"
          class="h-16 w-5/12 bg-transparent border rounded flex items-center justify-center text-xl"
          ><font-awesome-icon icon="fa-solid fa-arrow-left" />
          <p class="ml-3">VOLTAR</p></NuxtLink
        >
      </div>
    </div>

    <input id="my-modal-5" type="checkbox" class="modal-toggle" />
    <label
      for="my-modal-5"
      class="modal cursor-pointer modal-center cel:modal-bottom"
    >
      <label
        class="modal-box relative bg-transparent w-10/12 h-2/6 max-h-4/6 p-2"
        for=""
      >
        <Modal
          id="5"
          :text-inputs="[
            {
              inputId: 'itemAmount',
              labelText: 'Digite aqui a quantidade:',
              type: 'number',
              placeholder: 'Quantidade...',
            },
          ]"
          :button-inputs="[
            {
              id: 'addItem',
              text: 'ADICIONAR',
              class: 'success',
            },
          ]"
        />
      </label>
    </label>
  </div>
  <div v-else><Loading /></div>
</template>

<script async setup>
  const route = await useRoute()

  const { data: item, pending } = useLazyAsyncData(
    'item',
    () =>
      $fetch('/api/item', {
        method: 'GET',
        headers: { 'Item-Id': route.params.itemId },
      }),
    { server: false }
  )

  const characterId = route.query.characterId
  const redirected = route.query.redirected

  const returnURL = `/${characterId}/inventario`

  definePageMeta({
    middleware: 'auth',
  })
</script>

<style>
  body {
    background: aliceblue;
  }
</style>
