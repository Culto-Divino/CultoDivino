<template>
  <div id="modal" class="w-full h-full flex items-center justify-center z-10">
    <div
      class="w-full h-full bg-bgInput flex flex-col items-center justify-center text-white rounded-lg border-4 border-gray-600 z-0"
    >
      <div
        class="flex flex-col w-full h-full justify-evenly items-center overflow-y-auto"
      >
        <div class="flex w-full flex-wrap items-center justify-evenly mt-3">
          <div
            class="flex flex-col items-center items-center justify-center h-20 w-11/12 min-h-16"
          >
            <label for="textBox" class="text-sm w-full pl-2">{{
              textInput.labelText
            }}</label>
            <input
              id="textBox"
              :type="textInput.type"
              :placeholder="textInput.placeholder"
              :value="returnValue"
              class="mt-2 w-full px-2 h-8 bg-transparent bg-gray-200/25 outline-none rounded"
              @input="updateValue($event.target.value)"
            />
          </div>
        </div>

        <div class="flex w-full flex-wrap items-center justify-evenly">
          <div
            class="mt-2 h-16 min-h-16 flex flex-wrap items-center justify-center"
          >
            <button
              v-if="buttonInput.class == 'success'"
              id="button"
              class="w-28 h-12 rounded-xl bg-green-600"
              @click="$emit('button-pressed', returnValue)"
            >
              {{ buttonInput.text }}
            </button>
            <button
              v-else-if="data.class == 'error'"
              id="button"
              class="w-28 h-12 rounded-xl bg-red-600"
              @click="$emit('button-pressed', returnValue)"
            >
              {{ buttonInput.text }}
            </button>
            <div v-else class="modal-action">
              <label for="button"
                ><div
                  id="label"
                  class="w-28 h-12 rounded-xl border border-white flex items-center justify-center"
                >
                  {{ buttonInput.text }}
                </div></label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    id: String,
    textInput: Object,
    buttonInput: Object,
  })

  const returnValue = ref('bcs')

  defineEmits('button-pressed')

  function updateValue(value) {
    returnValue.value = value
  }

  const modalName = `my-modal-${props.id}`
</script>

<!-- 

  text-inputs:

    {
      inputId: 'id',
      labelText: 'Texto do label',
      type: 'text',
      placeholder: 'placeholder'
    }

  
  button-inputs:

    {
      id: 'id',
      text: 'texto',
      class: 'success / error' // não obrigatório
    }

 -->
