<template>
  <div>
    <Header />
    <div
      class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex justify-center items-center truncate"
    >
      <Auth
        title="Log in"
        button-text="Entrar"
        :form="form"
        :message="message"
        type="register"
        @submit="signin"
        @update:email="updateEmail"
        @update:password="updatePassword"
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

  const signin = async () => {
    console.log(form.value.password, form.value.email)

    if (!form.value.password || !form.value.email) {
      message.value = 'Ainda há campos a serem preenchidos!'
      return
    }

    const result = await signInUser(form.value.email, form.value.password)

    if (!result) {
      message.value = 'Verifique email e senha!'
      return
    }

    await navigateTo('escolha-de-personagem')
  }
</script>
