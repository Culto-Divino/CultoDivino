<template>
  <div
    class="flex flex-col items-center justify-center w-5/12 h-3/6 mr-2 rounded-2xl border border-slate-600 shadow-md shadow-cyan-500 active:translate-y-px"
  >
    <h2>{{ title }}</h2>
    <input
      type="text"
      class="bg-transparent w-10 outline-none text-center"
      :value="value"
    />
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    value: String,
  })
</script>
