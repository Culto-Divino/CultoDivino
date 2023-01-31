<template>
  <div class="flex flex-col">
    <div>
      <p>{{ title }}</p>
      <input v-model="searchQuery" class="text-black" />
    </div>
    <div>
      <select
        v-model="selectedArchetype"
        class="bg-transparent border-b px-2"
        @input="$emit('update:selected', $event.target.value)"
        @mousedown="filterElements()"
      >
        <option v-if="!elements" disabled value="">
          {{ loadingText }}
        </option>
        <option v-else disabled value="">{{ selectText }}</option>
        <option
          v-for="(element, index) in displayElements"
          :key="index"
          class="text-black"
          :value="element"
        >
          {{ element }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: String,
    loadingText: String,
    selectText: String,
    elements: Array,
  })
  const searchQuery = ref('')
  const selectedArchetype = ref()
  const displayElements = ref([])

  function filterElements() {
    displayElements.value = []

    if (selectedArchetype.value) {
      displayElements.value.push(selectedArchetype.value)
    }

    const sanitizedElements = props?.elements.map((element: string) => {
      return element.toLowerCase()
    })
    sanitizedElements.forEach((element: string) => {
      if (
        element.includes(searchQuery.value.toLowerCase()) &&
        element !== selectedArchetype.value
      ) {
        displayElements.value.push(element)
      }
    })
  }
  defineEmits(['update:selected'])
</script>
