<template>
  <NuxtLayout name="default" data-theme="theme">
    <NuxtLink to="/login"> back </NuxtLink>
    <button @click="signOut">sair</button>
  </NuxtLayout>
</template>

<script setup>
  definePageMeta({
    middleware: 'auth',
  })

  const signOut = async () => {
    await signOutUser()
  }
</script>
