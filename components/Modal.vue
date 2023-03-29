<template>
  <div
    v-if="render"
    class="fixed z-20 inset-0 overflow-y-auto bg-black/50"
    @click="
      () => {
        if (!inside) {
          $emit('clicked-out')
          inside = false
        }
        inside = false
      }
    "
  >
    <div
      class="internal-modal-wrapper rounded-sm flex items-start justify-center min-h-screen pt-24 text-center"
    >
      <div
        id="wrapper"
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2"
        aria-modal="true"
        aria-labelledby="modal-headline"
        @click="inside = true"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    render: Boolean,
  })

  defineEmits(['clicked-out'])
</script>
