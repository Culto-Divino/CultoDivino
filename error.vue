<template>
  <div
    class="select-none overflow-auto w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex flex-col flex-wrap justify-center items-center text-white"
  >
    <h1 class="text-9xl">Erro #{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
  const error = useError()
  const route = useRoute()

  if (error.value.statusCode === 404) {
    error.value.message = `O caminho "${route.fullPath}" não foi encontrado!`
  }
</script>
