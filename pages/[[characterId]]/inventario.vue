<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 z-0 scrollbar scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-100/25 scrollbar-thumb-rounded scrollbar-track-rounded"
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
            :itemid="item._id"
          />
        </ClientOnly>
      </div>
      <div class="w-11/12 h-1/6 flex items-center justify-between">
        <div
          class="w-full h-full border rounded-lg text-xl flex items-center justify-center cursor-pointer"
        >
          ADICIONAR
        </div>
        <NuxtLink
          :to="libraryPath"
          class="w-5/12 h-3/6 border rounded-lg text-xl flex items-center justify-center"
          >BIBLIOTECA</NuxtLink
        >
      </div>
    </div>
  </div>

  <Modal :render="optionsModal" @clicked-out="optionsModal = !optionsModal">
  </Modal>
</template>

<script setup>
  const route = useRoute()
  const characterId = route.params.characterId
  const maxWeight = 9

  const libraryPath = `/${characterId}/biblioteca`

  const inventory = []
  let actualWeight = 0

  if (process.client) {
    const items = await useCharacterItems(characterId)

    const existingIds = []
    items.inventory.forEach((key) => {
      actualWeight += key.weight

      if (key.isUnique) {
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
  }
</script>
