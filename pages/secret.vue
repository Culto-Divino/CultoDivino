<template>
  <NuxtLink to="/login"> back </NuxtLink>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
