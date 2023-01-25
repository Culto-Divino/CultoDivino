<template>
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 truncate z-0">
        <div class="sticky top-0 w-full h-16 bg-white/75 flex justify-evenly items-center">
            <NuxtLink :to="backLink" class="text-3xl hover:cursor-pointer" ><font-awesome-icon icon="fa-solid fa-solid fa-arrow-left" class="text-3xl hover:cursor-pointer"/></NuxtLink>
            <p class="text-3xl">O Culto Divino</p>
            <font-awesome-icon @click="logOut()" icon="fa-solid fa-power-off" class="text-3xl hover:cursor-pointer"/>
        </div>

        <input class="w-full text-center h-12 flex items-center justify-center text-white text-3xl mt-2 bg-transparent outline-none" :value="title" />

        <div class="w-full h-full flex items-center justify-center">
            <textarea class="w-11/12 h-3/4 mb-32 bg-bgNote1/[.85] text-white p-2 outline-none text-2xl drop-shadow-xl" :value="note"></textarea>
        </div>

    </div>
</template>

<script setup>
    const title = "Título"
    const note = "asadsadhjasdbj"

    let route = useRoute()

    const backLink = `/${route.params.characterId}/anotacoes/`
</script>