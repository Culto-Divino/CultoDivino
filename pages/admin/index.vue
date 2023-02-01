<template>
    <div>
        <p class="text-black">Concrode com o item abaixo para acessar a página de criação de item!</p><br>
        <NuxtLink to="/admin/item-creation" class="text-blue-500">Eu concordo que o Injustiça Sorridente é infinitamente melhor que o Solstício Negro, única e exclusivamente por conta dos players.</NuxtLink>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
})
</script>