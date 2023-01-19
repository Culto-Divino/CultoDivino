<template>
  <div class="wrapper cel:w-10/12 w-6/12 h-4/6 bg-gradient-to-r from-gray-800/75 to-gray-900/75 overflow-hidden rounded-lg text-white flex flex-col items-center justify-evenly">
    <h2 class="title text-4xl">{{ title }}</h2>
    <div class="field flex flex-col w-8/12 h-20">
      <label class="label pl-1">Email</label>
      <input
        v-model="form.email"
        class="email bg-gray-500/75 h-3/6 mt-2 pl-1 ease-in-out duration-500 outline-none rounded-md focus:rounded focus:bg-gray-500 focus:placeholder:text-slate-600"
        type="input"
        placeholder="seu.email@aqui.com"
        autocomplete="false"
        autocapitalize="false"
      />
    </div>

    <div class="field flex flex-col w-8/12 h-20">
      <label class="label pl-1">Senha</label>
      <input
        v-model="form.password"
        class="input bg-gray-500/75 h-3/6 mt-2 pl-1 ease-in-out duration-500 outline-none rounded-md focus:rounded focus:bg-gray-500 focus:placeholder:text-slate-600"
        type="password"
        placeholder="*********"
        autocomplete="false"
        autocapitalize="false"
      />
    </div>
    
    <div v-if="message" class="message">
      {{ message }}
    </div>

    <button class="button w-6/12 h-12 rounded-md ease-in-out duration-500 bg-blue-900 hover:drop-shadow-md hover:-translate-y-0.5" @click="$emit('submit')">{{ buttonText }}</button>

    <NuxtLink class="text-center" v-if="type == 'register'" to="/register"> Ainda não tem uma conta?<br>Registre-se aqui. </NuxtLink>
    <NuxtLink class="text-center" v-if="type == 'login'" to="/login"> Já tem uma conta?<br>Entre aqui. </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  form: Object,
  title: String,
  message: String,
  buttonText: String,
  type: String
});
</script>