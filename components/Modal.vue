<template>
  <div v-if="render" class="fixed z-20 inset-0 overflow-y-auto bg-black/50">
    <div
      class="internal-modal-wrapper flex items-start justify-center min-h-screen pt-24 text-center"
    >
      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
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
