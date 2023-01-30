<template>
  <div
    class="flex flex-col items-center justify-center w-5/12 h-3/6 mr-1 rounded-2xl border border-slate-600 shadow-md shadow-cyan-500 active:translate-y-px"
  >
    <h2>{{ title }}</h2>
    <p>
      <input
        type="text"
        :value="value"
        class="bg-transparent w-10 outline-none text-right"
      />/{{ maxValue }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    value: String,
    maxValue: String,
  })
</script>
