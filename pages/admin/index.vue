<template>
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 overflow-y-scroll overflow-x-hidden z-0 flex flex-col justify-center items-center break-words">
        <Header :logged="true" />
        <div class="w-11/12 h-5/6 mt-16 flex flex-col items-center justify-center">
            <h1 class="text-3xl text-center">Oi, Mart! <br>Para onde você quer ser redirecionado?</h1>
            <div class="w-10/12 h-32 flex items-center justify-evenly mt-5">
                <NuxtLink to="/admin/editar-personagem" class="w-5/12 rounded border border-sky-500 bg-black/50 h-24 flex items-center justify-center flex-wrap cursor-pointer hover:bg-black/25 break-words">
                    <p class="text-center ">Edição de Personagem</p>
                </NuxtLink>
                <NuxtLink to="/admin/editar-item" class="w-5/12 rounded border border-sky-500 bg-black/50 h-24 flex items-center justify-center flex-wrap cursor-pointer hover:bg-black/25 break-words">
                    <h1 class="text-center">Edição de Item</h1>
                </NuxtLink>
            </div>
            <div class="w-10/12 h-32 flex items-center justify-evenly mt-5">
                <NuxtLink to="/admin/criar-personagem" class="w-5/12 rounded border border-sky-500 bg-black/50 h-24 flex items-center justify-center flex-wrap cursor-pointer hover:bg-black/25 break-words">
                    <h1 class="text-center">Criação de Personagem</h1>
                </NuxtLink>
                <NuxtLink to="/admin/criar-item" class="w-5/12 rounded border border-sky-500 bg-black/50 h-24 flex items-center justify-center flex-wrap cursor-pointer hover:bg-black/25 break-words">
                    <h1 class="text-center">Criação de Item</h1>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
})
</script>