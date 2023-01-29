<template>
  <div>
    <Header />
    <div
      class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex justify-center items-center truncated"
    >
      <Auth
        title="Log in"
        button-text="Entrar"
        :form="form"
        :message="message"
        type="register"
        @submit="signin"
      />
    </div>
  </div>
</template>

<script setup>
  const form = ref({ email: '', password: '' })
  const message = ref('')

  const signin = async () => {
    if (!form.value.password || !form.value.email) {
      message.value = 'Ainda há campos a serem preenchidos!'
      return
    }

    const result = await signInUser(form.value.email, form.value.password)

    if (result.errorCode) {
      const userResponse = generateUserReponse(result.errorCode, form.value)
      form.value = {
        email: userResponse.email,
        password: userResponse.password,
      }
      message.value = userResponse.message
    }
  }
</script>
