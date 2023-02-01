<template>
  <div id="container" class="w-screen h-16 flex flex-col select-none text-black">
    <div class="flex justify-evenly items-center w-screen h-16 bg-white/75">
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="text-3xl hover:cursor-pointer"
        @click="teste()"
      />
      <p class="text-3xl">O Culto Divino</p>
      <font-awesome-icon
        icon="fa-solid fa-power-off"
        class="text-3xl hover:cursor-pointer"
        @click="logOut()"
      />
    </div>
    <div
      id="menu"
      class="hidden w-screen h-full bg-slate-900 flex flex-col justify-start"
    >
      <NuxtLink
        class="text-white h-20 flex items-center justify-start border-b border-slate-600 pl-3 text-xl bg-slate-800 hover:bg-slate-500"
        :to="'/' + character.id + '/VisaoGeral'"
      >
        <div><img :src="character.image" alt="" class="w-10 h-10 rounded-full border-2"></div>
        <div class="ml-4 text-2xl">{{ character.name }}</div>
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character.id + '/combate'"
      >
        Combate
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character.id + '/habilidades'"
      >
        Habilidades
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character.id + '/magias-e-amuletos'"
      >
        Magias / Amuletos
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character.id + '/inventario'"
      >
        Inventario
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character.id + '/documentos'"
      >
        Documentos
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character.id + '/historia'"
      >
        História
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character.id + '/anotacoes'"
      >
        Anotações
      </NuxtLink>
      <NuxtLink
        class="text-red-700 h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/escolha-de-personagem"
      >
        Alterar Personagem
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import useCharacter from "@@/composables/useCharacter";

const characterId = useRoute().params.characterId;
const character = await useCharacter(characterId);

let isMenuShown = false;

  function teste() {
    const menu = document.querySelector('#menu')
    const container = document.querySelector('#container')
    if (isMenuShown) {
      menu.classList.add('hidden')

      if (container.classList.contains('h-screen')) {
        container.classList.remove('h-screen')
        container.classList.add('h-16')
        container.classList.add('truncate')
      } else {
        container.classList.add('h-16')
      }
    } else {
      menu.classList.remove('hidden')

      if (container.classList.contains('h-16')) {
        container.classList.remove('h-16')
        container.classList.add('h-screen')
        container.classList.remove('truncate')
      } else {
        container.classList.add('h-screen')
      }
    }

    isMenuShown = !isMenuShown
  }

  function logOut() {
    signOutUser()
  }
</script>
