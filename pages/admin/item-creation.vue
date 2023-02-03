<template>
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex flex-col justify-center items-center truncate text-white">
        <div class="w-11/12 h-5/6 bg-gray-200/25 rounded-md overflow-y-scroll flex flex-col items-center">
            <div class="flex flex-col items-center justify-center w-full">
                <img src="@@/images/no_item_image.jpg" alt="" class="w-7/12 h-80 mt-7 rounded-lg border p-1">
                <label for="input" class="mt-6">Envie aqui o design do item!</label>
                <input type="file" id="input" class="file-input file-input-sm file-input-bordered file-input-primary w-full max-w-xs bg-transparent bg-gray-400/75" accept="image/*">
                <!-- IMAGEM -->
            </div>
            <div class="flex flex-col justify-center w-10/12 mt-2">
                <label for="itemName">Nome do item:</label>
                <input type="text" id="itemName" class="bg-transparent bg-gray-400/75 outline-none text-black h-10 mt-1 px-2 rounded-md focus:bg-slate-300 focus:rounded">
            </div>
            <div class="flex flex-col -justify-center w-10/12 mt-7 mb-10 h-80">
                <label for="itemDesc">Descrição do item:</label>
                <textarea name="itemDesc" id="itemDesc" class="w-full h-80 bg-transparent bg-gray-400/75 outline-none text-black mt-1 p-2 rounded-md focus:bg-slate-300 focus:rounded"></textarea>
            </div>
            <div class="flex h-20 w-10/12 justify-between">
                <div class="flex flex-col justify-center h-16 w-5/12">
                    <label for="itemWeight" class="pl-1">Peso:</label>
                    <input type="text" id="itemWeight" class="bg-transparent bg-gray-400/75 outline-none text-black h-10 mt-1 px-2 rounded-md focus:bg-slate-300 focus:rounded">
                </div>
                <div class="flex flex-col justify-center h-16 w-5/12">
                    <label for="itemSpace" class="pl-1">Espaço:</label>
                    <input type="text" id="itemWeight" class="bg-transparent bg-gray-400/75 outline-none text-black h-10 mt-1 px-2 rounded-md focus:bg-slate-300 focus:rounded">
                </div>
            </div>
            <div class="flex w-10/12 mt-6 justify-between mb-6">
                <button @click="cancelCreation()" class="h-10 w-5/12 bg-red-600 rounded">Cancelar</button>
                <button @click="confirmCreation()" class="h-10 w-5/12 bg-green-600 rounded">Confirmar</button>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'auth',
})

function cancelCreation(){
    console.log('*cancelou*')
}

function confirmCreation(){
    console.log('*confirmou*')
}

</script>