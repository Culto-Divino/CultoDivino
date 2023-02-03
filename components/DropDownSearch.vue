<template>
  <div class="flex flex-col truncate w-full mt-5">
    <div>
      <p class="text-sm">{{ title }}</p>
      <div class="flex w-full">
        <input id="serchArchetype" v-model="searchQuery" class="text-white bg-transparent outline-none px-2 border-b w-full" />
        <label for="serchArchetype" class="text-white"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></label>
      </div>
    </div>
    <div class=" flex flex-col relative">
      <div class="w-full h-full flex">
        <select
          id="characterArchetype"
          v-model="selectedArchetype"
          class="w-full appearance-none h-10 bg-transparent bg-gray-400/75 text-black text-xl border-0 px-2 outline-none rounded mt-3"
          @mousedown="filterElements()"
          @input="$emit('update:selected', $event.target.value)"
        >
          <option v-if="!elements" disabled value="">
            {{ loadingText }}
          </option>
          <option v-else disabled selected value="" class="bg-gray-400 text-white">{{ selectText }}</option>
          <option
            v-for="(element, index) in displayElements"
            :key="index"
            class="bg-gray-700/75 text-white w-full"
            :value="element"
          >
            {{ element }}
          </option>
        </select>
        <div>
          <label for="characterArchetype" class="absolute right-0 mr-4 mt-5 text-black"><font-awesome-icon icon="fa-solid fa-caret-down" /></label>
        </div>
      </div>
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
