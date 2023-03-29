<template>
  <div
    class="flex flex-col items-center justify-center w-5/12 h-3/6 mr-1 rounded-2xl border border-slate-600 shadow-md shadow-cyan-500 active:translate-y-px"
  >
    <h2>{{ title }}</h2>
    <p>
      <input
        type="number"
        :value="value"
        max="99"
        class="bg-transparent w-10 outline-none text-right"
        @change="$emit('value-modified', $event.target.value)"
      /><a class="felx text-zinc-700">/</a><a> {{ maxValue }}</a
      ><a v-if="modValue" class="text-blue-700"> + {{ modValue }}</a>
    </p>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    value: Number,
    maxValue: Number,
    modValue: Number,
  })

  defineEmits(['value-modified'])
</script>
