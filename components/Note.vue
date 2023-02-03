<template>
  <NuxtLink
    :to="notePath"
    class="h-20 min-h-[5rem] w-[95%] bg-gradient-to-r from-bgNote1 to-bgNote2 mt-2 text-white pl-2 flex flex-col justify-center"
  >
    <h2 class="text-2xl">{{ title }}</h2>
    <p class="text-slate-500 h-8 w-11/12 truncate flex items-center">
      {{ note }}
    </p>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    title: String,
    note: String,
    id: String,
  })

  const route = useRoute()
  const notePath = `/${route.params.characterId}/anotacoes/${props.id}/`
</script>
