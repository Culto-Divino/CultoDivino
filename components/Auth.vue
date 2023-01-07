<template>
  <div class="wrapper">
    <h2 class="title">{{ title }}</h2>
    <div class="field">
      <label class="label">Email</label>
      <input
        v-model="form.email"
        class="email"
        type="input"
        placeholder="seu.email@aqui.com"
        autocomplete="false"
        autocapitalize="false"
      />
    </div>

    <div class="field">
      <label class="label">Senha</label>
      <input
        v-model="form.password"
        class="input"
        type="password"
        placeholder="*********"
        autocomplete="false"
        autocapitalize="false"
      />
    </div>

    <button class="button" @click="$emit('submit')">{{ buttonText }}</button>

    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  form: Object,
  title: String,
  message: String,
  buttonText: String,
});
</script>
