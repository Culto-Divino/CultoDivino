<template>
  <div>
    <Header />
    <div
      class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex justify-center items-center truncate"
    >
      <Auth
        title="Cadastro"
        button-text="Registrar"
        :form="form"
        :message="message"
        type="login"
        @submit="signup"
        @update:password="updatePassword"
        @update:email="updateEmail"
      />
    </div>
  </div>
</template>

<script setup>
  const form = ref({ email: '', password: '' })
  const message = ref('')

  const updatePassword = (password) => {
    form.value.password = password
  }
  const updateEmail = (email) => {
    form.value.email = email
  }

  const signup = async () => {
    if (!form.value.password || !form.value.email) {
      message.value = 'Ainda há campos a serem preenchidos!'
      return
    }

    const result = await createUser(form.value.email, form.value.password)

    await navigateTo('escolha-de-personagem')
  }
</script>
