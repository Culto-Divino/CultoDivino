<template>
    <div>
        <NuxtLink to="/items/1">Teste</NuxtLink>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
})
</script>