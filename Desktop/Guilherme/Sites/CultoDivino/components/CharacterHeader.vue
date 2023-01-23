<template>
  <div id="container" class="w-screen h-16 flex flex-col select-none">
    <div class="flex justify-evenly items-center w-screen h-16 bg-white/75">
      <font-awesome-icon
        @click="teste()"
        icon="fa-solid fa-bars"
        class="text-3xl hover:cursor-pointer"
      />
      <p class="text-3xl">O Culto Divino</p>
      <font-awesome-icon
        @click="logOut()"
        icon="fa-solid fa-power-off"
        class="text-3xl hover:cursor-pointer"
      />
    </div>
    <div
      id="menu"
      class="hidden w-screen h-full bg-slate-900 flex flex-col justify-start"
    >
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/combate"
      >
        Combate
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/habilidades"
      >
        Habilidades
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/magias-e-amuletos"
      >
        Magias / Amuletos
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/inventario"
      >
        Inventario
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/documentos"
      >
        Documentos
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/VisaoGeral"
      >
        Visão Geral
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/historia"
      >
        História
      </NuxtLink>
      <NuxtLink
        class="text-white h-16 flex items-center border-b border-slate-600 pl-2 text-xl hover:bg-slate-500"
        to="/1/anotacoes"
      >
        Anotações
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
let isMenuShown = false;

function teste() {
  let menu = document.querySelector("#menu");
  let container = document.querySelector("#container");
  if (isMenuShown) {
    menu.classList.add("hidden");

    if (container.classList.contains("h-screen")) {
      container.classList.remove("h-screen");
      container.classList.add("h-16");
      container.classList.add("truncate");
    } else {
      container.classList.add("h-16");
    }
  } else {
    menu.classList.remove("hidden");

    if (container.classList.contains("h-16")) {
      container.classList.remove("h-16");
      container.classList.add("h-screen");
      container.classList.remove("truncate");
    } else {
      container.classList.add("h-screen");
    }
  }

  isMenuShown = !isMenuShown;
}

function logOut() {
  signOutUser();
}
</script>
