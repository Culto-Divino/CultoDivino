<template>
    <div class="text-black">
        <CharacterHeader />
        Biblioteca<br>
        sai daqui vai<br>
        <NuxtLink :to="inventoryPath" class="text-sky-500">Sair</NuxtLink>
    </div>
</template>

<script setup>

const route = useRoute()
const characterId = route.params.characterId

const inventoryPath = `/${characterId}/inventario`

</script>