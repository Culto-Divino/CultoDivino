<template>
    <Header />
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex justify-center items-center truncate text-white">
        <div id="default-carousel" class="w-10/12 h-4/6 bg-gray-200/25 flex flex-col items-center justify-center rounded-xl">
            <h1 class="text-2xl">ESCOLHA DE PERSONAGEM</h1>
            <div class="flex w-5/12 justify-evenly mt-2">
                <input type="text" name="characterSearch" class="pl-2 bg-transparent bg-gradient-to-r from-cyan-900 to-sky-900 outline-none border-b rounded-full hover:rounded transition duration-2000 ease-in-out">
                <label for="characterSearch"><button @click="search()"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button></label>
            </div>
            <div class="w-full h-4/6 mt-3 flex items-center justify-evenly overflow-x-scroll">
                <Character 
                id="carousel-item-1" 
                image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/09/tse-paulo-bosta-250001621707.jpg?w=161"
                name="Paulo Bosta"
                element="Inveja"
                level="17"
                />
                
                <Character
                id="carousel-item-2"
                image="https://pbs.twimg.com/ext_tw_video_thumb/1300937051685167106/pu/img/BLIZ28RAukMuBXKI.jpg"
                name="Nanan do Galo Doido"
                element="Gula"
                level="22"
                />

                <Character
                id="carousel-item-3"
                image="https://pcdob.org.br/wp-content/uploads/2018/09/foto_1534277122382.jpg"
                name="João Macarrão"
                element="Avareza"
                level="10"
                />

            </div>
            <div class="flex text-4xl w-8/12 items-center justify-evenly mt=3">
                <button type="button" @click="prevCarousel()"> &lt </button>
                <button type="button" @click="nextCarousel()"> &gt </button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>