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
  import { generateUserResponse } from '@@/composables/useAuthErrorHandler'

  const form = ref({ email: '', password: '' })
  const message = ref('')

  const updatePassword = (password) => {
    form.value.password = password
  }
  const updateEmail = (email) => {
    form.value.email = email
  }

  const signin = async () => {
    if (!form.value.password || !form.value.email) {
      message.value = 'Ainda há campos a serem preenchidos!'
      return
    }

    const result = await signInUser(form.value.email, form.value.password)

    if (result.error) {
      const userResponse = generateUserResponse(result.error, form.value)
      form.value = {
        email: userResponse.email,
        password: userResponse.password,
      }

      message.value = userResponse.message
    }
  }
</script>
