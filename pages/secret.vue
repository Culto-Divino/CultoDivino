<template>

    <NuxtLink to='/'> back </NuxtLink>

</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})


</script>