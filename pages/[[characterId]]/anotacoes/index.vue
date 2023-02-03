<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 overflow-y-scroll overflow-x-hidden z-0"
  >
    <CharacterHeader class="sticky top-0 z-10" />
    <div class="w-full h-full flex flex-col items-center justify-center">
      <button
        class="w-8/12 h-12 mb-3 text-white text-2xl bg-gradient-to-r from-gray-600 to-slate-600 rounded active:translate-y-1"
        @click="createNote()"
      >
        + Adicionar Nota
      </button>
      <div
        class="w-11/12 h-5/6 pt-2 rounded-md overflow-y-auto overflow-x-hidden bg-gray-400/50 flex flex-col items-center scrollbar scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-100/25 scrollbar-thumb-rounded scrollbar-track-rounded"
      >
        <Note
          id="1"
          title="Título"
          note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
        />
        <Note
          id="2"
          title="Título"
          note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
        />
        <Note
          id="3"
          title="Título"
          note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
        />
        <Note
          id="4"
          title="Título"
          note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
        />
        <Note
          id="5"
          title="Título"
          note="Anotaçãojksadnsakjdjskadnjkasdjksanksakjdshbakjdhsajdjasahjsdbsahjdbsahj"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()

  function createNote() {
    navigateTo(`/${route.params.characterId}/anotacoes/1/`)
  }
</script>
