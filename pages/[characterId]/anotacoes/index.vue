<template>
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 overflow-y-scroll overflow-x-hidden z-0">
        <CharacterHeader class="sticky top-0 z-10" />
        <div class="w-full h-full flex flex-col items-center justify-center">
            <button @click="createNote()" class="w-8/12 h-12 mb-3 text-white text-2xl bg-gradient-to-r from-gray-600 to-slate-600 rounded active:translate-y-1">Adicionar Nota</button>
            <div class="w-11/12 h-5/6 pt-2 overflow-y-scroll overflow-x-hidden bg-gray-400/50 flex flex-col items-center">
                <Note 
                title="Título"
                note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
                id="1"
                />
                <Note 
                title="Título"
                note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
                id="2"
                />
                <Note 
                title="Título"
                note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
                id="3"
                />
                <Note 
                title="Título"
                note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
                id="4"
                />
                <Note 
                title="Título"
                note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
                id="5"
                />
            </div>
        </div>
    </div>
</template>

<script setup>

    let route = useRoute()

    function createNote(){
        navigateTo(`/${route.params.characterId}/anotacoes/1/`)
    }
</script>