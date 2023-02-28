<template>
  <div class="text-black">
    <CharacterHeader />
    <div v-if="!pending">
      <InventoryItem
        v-for="item in items"
        :key="item._id"
        :name="item.name"
        :itemid="item._id"
        :weight="item.weight"
      />
    </div>
    <div v-else><loading></loading></div>

    <NuxtLink :to="inventoryPath" class="text-sky-500">Sair</NuxtLink>
  </div>
</template>

<script setup>
  const route = useRoute()
  const characterId = route.params.characterId

  // eslint-disable-next-line prefer-const
  let { data: items, pending } = useAsyncData(
    'items',
    () => $fetch('/api/items', { method: 'GET' }),
    { server: false }
  )

  watch(pending, () => {
    console.log(items.value)
  })

  const inventoryPath = `/${characterId}/inventario`
</script>
