<template>
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 overflow-y-scroll overflow-x-hidden z-0">
        <CharacterHeader class="sticky top-0 z-10" />
        <div class="w-screen h-full flex flex-col items-center justify-evenly pc:flex-row z-0">
            <img class="w-4/6 h-4/6 mt-1 pc:w-2/6 rounded-xl border border-slate-300 p-1 drop-shadow-lg" src="../../images/gutao_cria.jpg" alt="">
            <div class="text-xl w-4/6">
                <div class="flex"><p class="text-slate-300">Nome: </p> <p class="text-white pl-1">Augusto Barcelos</p></div>
                <div class="flex mt-1"><p class="text-slate-300">Idade: </p> <p class="text-white pl-1">38</p></div>
                <div class="flex mt-1"><p class="text-slate-300">Sexo: </p> <p class="text-white pl-1">Masculino</p></div>
                <div class="flex mt-1"><p class="text-slate-300">Classe: </p> <p class="text-white pl-1">Acadêmico</p></div>
                <div class="flex mt-1"><p class="text-slate-300">Arquétipo: </p> <p class="text-white pl-1">Tecnólogo</p></div>
            </div>
        </div>
        <div class="flex flex-col w-full items-center justify-center text-white text-3xl mt-8">
            <h1>Força de Vontade</h1>
            <div class="flex w-full items-center justify-center mt-2 h-12">
                <div class="w-8/12 h-full bg-gray-200/25 rounded-lg truncate">
                    <div id="vontadeValue" class="h-full bg-gradient-to-r from-cyan-500 to-sky-500 border-r-2 border-r-white shadowl w-[20%]"></div>
                </div>
                <input id="vontadeInput" type="text" value="50 %" @input="teste()" class="ml-3 w-16 h-full bg-transparent outline-none"/>
            </div>
        </div>
    </div>
</template>

<style>

.shadowl{
        box-shadow: inset -3px 0px 10px #FFFFFF;
}

</style>

<script setup>

    function teste(){
        let el = document.querySelector("#vontadeInput")
        let vontadeValue = document.querySelector('#vontadeValue')

        let newVontadeValue = `w-[${el.value.replace(' %','')}%]`
        let actualWidth = getActualWidth(vontadeValue)
        
        console.log(vontadeValue.classList)
        
        if(!actualWidth) return
        
        vontadeValue.classList.remove(actualWidth)
        vontadeValue.classList.add(`${newVontadeValue}`)

        console.log(vontadeValue.classList)
    }

    function getActualWidth(el){
        let ret;

        el.classList.forEach(i => {
            if(i.startsWith('w-')){
                ret = i
            }
        })

        return ret
    }
</script>