<template>
    <div class="absolute top-0 w-screen h-16 bg-white/75 flex items-center justify-evenly text-center text-black">
        <NuxtLink v-if="creation" to="/escolha-de-personagem" class="text-3xl hover:cursor-pointer" ><font-awesome-icon icon="fa-solid fa-solid fa-arrow-left" class="text-3xl hover:cursor-pointer"/></NuxtLink>
        <h1 class="text-3xl w-6/12">O Culto Divino</h1>
        <font-awesome-icon
        v-if="logged"
        @click="logOut()"
        icon="fa-solid fa-power-off"
        class="text-3xl hover:cursor-pointer"
        />
    </div>
</template>

<script setup>
    const props = defineProps({
        creation: Boolean,
        logged: Boolean
    })

    function logOut() {
        signOutUser();
    }
</script>