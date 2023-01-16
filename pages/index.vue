<template>
  <NuxtLink to="/login"> back </NuxtLink>
  <button @click="signOut"> sair </button>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

const signOut = async () => {
  const result = await signOutUser()
}


</script>
