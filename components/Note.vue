<template>
  <NuxtLink
    :to="notePath"
    class="h-20 min-h-[5rem] w-[95%] bg-gradient-to-r from-bgNote1 to-bgNote2 mt-2 text-white px-2 flex flex-col justify-center"
  >
    <h2 class="text-2xl">{{ title }}</h2>
    <div class="w-full h-8 flex">
      <p
        v-if="isFullNote" 
        class="text-slate-500 h-full w-full truncate flex items-center"
      >
        {{ note }}
      </p>
      <p
        v-if="!isFullNote"
        class="text-slate-500 h-full w-11/12 truncate flex items-center"
      >
        {{ note }}
      </p>
      <p
        v-if="!isFullNote" 
        class="text-slate-500 h-full ml-1 text-lg truncate flex items-center">
        ...
      </p>
    </div>
    
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    title: String,
    note: String,
    id: String,
    isFullNote: Boolean
  })

  const route = useRoute()
  const notePath = `/${route.params.characterId}/anotacoes/${props.id}/`
</script>
