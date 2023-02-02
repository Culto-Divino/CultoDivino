<template>
  <div class="w-screen h-screen bg-gradient-to-r overflow-y-scroll overflow-x-hidden from-bgColor1 to-bgColor2 z-0">
    <CharacterHeader class="sticky top-0 z-10" />
    <div class="w-full h-full flex items-center flex-col justify-evenly">
      <div class="w-11/12 h-4/6 bg-gray-200/25 rounded-md flex flex-col items-center overflow-y-scroll">

        <div class="sticky top-0 w-full min-h-12 h-12 bg-white/75 rounded-t-md text-black flex items-center justify-between">
          <h1 class="ml-3 text-2xl">Espaço:</h1>
          <p v-if="actualWeight <= maxWeight" class="mr-5 text-2xl">{{ actualWeight }}/{{ maxWeight }}</p>
          <p v-else class="mr-5 text-red-700 text-2xl">{{ actualWeight }}/{{ maxWeight }}</p>
        </div>

        <!-- eslint-disable-next-line vue/valid-v-for -->
        <InventoryItem
        v-for="(item) in userInv"
        :image="item.image"
        :name="item.name"
        :weight="item.weight"
        :itemid="item.id"
        />
        
      </div>
      <div class="w-11/12 h-1/6 flex items-center justify-between">

        <button class="w-5/12 h-3/6 border rounded-lg text-xl">ADICIONAR</button>
        <NuxtLink :to="libraryPath" class="w-5/12 h-3/6 border rounded-lg text-xl flex items-center justify-center">BIBLIOTECA</NuxtLink>

      </div>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()
const characterId = route.params.characterId

const libraryPath = `/${characterId}/biblioteca`

const actualWeight = 9
const maxWeight = 9

const userInv = [
  {
    image: 'https://a-static.mlcdn.com.br/800x560/caixa-de-som-jbl-charge-5-bluetooth-portatil-40w-com-tweeter/magazineluiza/228567500/9cccadaf1da66ac5328ff5be7666bb93.jpg',
    name: 'Caixa de Som',
    weight: '5',
    id: '1'
  },
  {
    image: 'https://static.paodeacucar.com/img/uploads/1/761/11697761.jpg',
    name: 'Bolinho hmmm',
    weight: '3',
    id: '2'
  }
]

</script>