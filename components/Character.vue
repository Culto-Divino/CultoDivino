<template>
  <div class="mt-4 w-5/12 h-full flex flex-col">
    <NuxtLink
      :to="redirectLink"
      class="mt-4 w-full h-full flex flex-col"
    >
      <img 
        :src="data.image" 
        class="static w-full h-4/6 max-h-4/6 min-h-4/6 rounded-t truncate object-fill aspect-[1/1]" 
      />
      <div
        class="w-full h-2/6 bg-slate-900 flex flex-col items-center justify-center text-lg rounded-b"
      >
        <div class="w-10/12 h-1/5 flex truncate">
          <p class="text-slate-200">Nome:</p>
          <p class="text-white pl-1 h-1/5">{{ data.name }}</p>
        </div>
        <div class="w-10/12 h-1/5 flex truncate">
          <p class="text-slate-200">Elemento:</p>
          <p class="text-white pl-1">{{ data.element }}</p>
        </div>
        <div class="w-10/12 h-1/5 flex truncate">
          <p class="text-slate-200">Nível:</p>
          <p class="text-white pl-1">{{ data.level }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object
});

const redirectLink = `/${props.data.id}/VisaoGeral`

  // console.log(props.characterId);
</script>

<style>

  p{
    -webkit-transition: 3.3s;
    -moz-transition: 3.3s;
    transition: 3.3s;     
    
    -webkit-transition-timing-function: linear;
    -moz-transition-timing-function: linear;
    transition-timing-function: linear;
  }

</style>