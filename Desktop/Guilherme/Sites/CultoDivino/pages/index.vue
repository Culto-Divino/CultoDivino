<template>
  <NuxtLayout name="default">
    <NuxtLink to="/login"> back </NuxtLink>
    <button @click="signOut"> sair </button>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

const signOut = async () => {
  const result = await signOutUser()
}


</script>
