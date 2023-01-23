<template>
    <Header />
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex justify-center items-center truncate text-white">
        <div id="default-carousel" class="w-10/12 h-4/6 bg-gray-200/25 flex flex-col items-center justify-center rounded-xl">
            <h1 class="text-2xl">ESCOLHA DE PERSONAGEM</h1>
            <div class="flex w-5/12 justify-evenly mt-2">
                <input type="text" name="characterSearch" class="pl-2 bg-transparent bg-gradient-to-r from-cyan-900 to-sky-900 outline-none border-b rounded-full hover:rounded transition duration-2000 ease-in-out">
                <label for="characterSearch"><button @click="search()"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button></label>
            </div>
            <div class="w-full h-4/6 mt-3 flex items-center flex-wrap justify-evenly overflow-x-hidden">
                <Character 
                v-for="(character) in characters.docs" 
                :key="character"
                :data="{ name: character.nome, element: character.element, image: character.image, level: character.level }"
                />
            </div>
        </div>
    </div>
</template>

<script setup>

const meta = definePageMeta({ 
    middleware: 'auth'
})

const characters = await $fetch('/api/fetchCharacters', { method: 'get' })
console.log(characters)

</script>