<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    class="w-screen h-screen bg-gradient-to-r overflow-y-auto overflow-x-hidden from-bgColor1 to-bgColor2 z-0 scrollbar scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-100/25 scrollbar-thumb-rounded scrollbar-track-rounded"
  >
    <CharacterHeader class="sticky top-0 z-10" />
    <div class="w-full h-full flex items-center flex-col justify-evenly">
      <div
        class="w-11/12 h-4/6 bg-gray-200/25 rounded-md flex flex-col items-center overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-100/25 scrollbar-thumb-rounded scrollbar-track-rounded"
      >
        <div
          class="sticky top-0 w-full min-h-12 h-12 bg-white/75 rounded-t-md text-black flex items-center justify-between"
        >
          <h1 class="ml-3 text-2xl">Espaço:</h1>
          <p v-if="actualWeight <= maxWeight" class="mr-5 text-2xl">
            {{ actualWeight }}/{{ maxWeight }}
          </p>
          <p v-else class="mr-5 text-red-700 text-2xl">
            {{ actualWeight }}/{{ maxWeight }}
          </p>
        </div>
        <ClientOnly>
          <InventoryItem
            v-for="item in inventory"
            :key="item._id"
            :image="item.image"
            :name="item.name"
            :weight="item.weight"
            :amount="item.amount"
            :itemid="item.id"
          />
        </ClientOnly>
        <!-- eslint-disable-next-line vue/valid-v-for -->
      </div>
      <div class="w-11/12 h-1/6 flex items-center justify-between">
        <!-- <label for="my-modal-1" class="w-5/12 h-3/6"><button class="w-full h-full border rounded-lg text-xl">ADICIONAR</button></label> -->

        <label for="my-modal-3" class="w-5/12 h-3/6">
          <div
            class="w-full h-full border rounded-lg text-xl flex items-center justify-center cursor-pointer"
          >
            ADICIONAR
          </div>
        </label>
        <NuxtLink
          :to="libraryPath"
          class="w-5/12 h-3/6 border rounded-lg text-xl flex items-center justify-center"
          >BIBLIOTECA</NuxtLink
        >
      </div>
    </div>
  </div>

  <input id="my-modal-3" type="checkbox" class="modal-toggle" />
  <label
    for="my-modal-3"
    class="modal cursor-pointer modal-center cel:modal-bottom"
  >
    <label
      class="modal-box relative bg-transparent w-10/12 h-min max-h-4/6 p-2 pc:h-2/5"
      for=""
    >
      <Modal
        id="3"
        :text-inputs="[
          {
            inputId: 'itemName',
            labelText: 'Item:',
            type: 'text',
            placeholder: 'Nome...',
          },
          {
            inputId: 'itemAmount',
            labelText: 'Quantidade:',
            type: 'text',
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
</template>

<script setup>
  const route = useRoute()
  const characterId = route.params.characterId

  const libraryPath = `/${characterId}/biblioteca`

  const inventory = []
  let actualWeight = 0

  if (process.client) {
    const items = await useCharacterItems(characterId)

    console.log(items)

    const existingIds = []
    items.inventory.forEach((key) => {
      console.log(key)
      actualWeight += key.weight

      if (key.isUnique) {
        console.log('aqui!')
        inventory.push(key)
        return
      }
      if (existingIds.includes(key._id)) {
        inventory.forEach((item) => {
          if (item._id === key._id) {
            item.amount++
          }
        })
        return
      }
      existingIds.push(key._id)
      inventory.push({ ...key, amount: 1 })
    })
    console.log(inventory, existingIds)
  }

  const maxWeight = 9

  const userInv = [
    {
      image:
        'https://a-static.mlcdn.com.br/800x560/caixa-de-som-jbl-charge-5-bluetooth-portatil-40w-com-tweeter/magazineluiza/228567500/9cccadaf1da66ac5328ff5be7666bb93.jpg',
      name: 'Caixa de Som',
      weight: '5',
      amount: '2',
      id: '1',
    },
    {
      image: 'https://static.paodeacucar.com/img/uploads/1/761/11697761.jpg',
      name: 'Bolinho hmmm',
      weight: '3',
      amount: '2',
      id: '2',
    },
  ]
</script>
