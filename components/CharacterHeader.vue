<template>
  <div
    id="container"
    class="w-screen h-16 flex flex-col select-none text-black"
  >
    <div class="flex justify-evenly items-center w-screen h-16 bg-white/75">
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="text-3xl hover:cursor-pointer"
        @click="toggle()"
      />
      <p class="text-3xl">O Culto Divino</p>
      <font-awesome-icon
        icon="fa-solid fa-power-off"
        class="text-3xl hover:cursor-pointer"
        @click="logOut()"
      />
    </div>
    <div
      v-if="isMenuShown"
      id="menu"
      class="w-screen h-screen bg-slate-900 flex flex-col justify-start"
    >
      <NuxtLink
        class="text-white h-20 flex items-center justify-start border-b border-slate-600 pl-3 text-xl bg-slate-800 hover:bg-slate-500"
        :to="'/' + character._id + '/visao-geral'"
      >
        <div>
          <img
            :src="character.image"
            alt=""
            class="w-10 h-10 rounded-full border-2"
          />
        </div>
        <div class="ml-4 text-2xl">{{ character.name }}</div>
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character._id + '/anotacoes'"
      >
        Anotações
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character._id + '/combate'"
      >
        Combate
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character._id + '/documentos'"
      >
        Documentos
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character._id + '/habilidades'"
      >
        Habilidades
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character._id + '/historia'"
      >
        História
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character._id + '/inventario'"
      >
        Inventario
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        :to="'/' + character._id + '/magias-e-amuletos'"
      >
        Magias / Amuletos
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
  import useCharacter from '@@/composables/useCharacter'

  const characterId = useRoute().params.characterId
  const character = await useCharacter(characterId)
  const isMenuShown = ref(false)

  const toggle = () => {
    isMenuShown.value = !isMenuShown.value
  }

  function logOut() {
    signOutUser()
  }
</script>
