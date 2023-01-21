<template>
  <Header />
  <div
    class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex justify-center items-center truncate"
  >
    <Auth
      title="Cadastro"
      button-text="Registrar"
      @submit="signup"
      :form="form"
      :message="message"
      type="login"
    />
  </div>
</template>

<script setup>
let form = ref({ email: "", password: "" });
let message = ref("");

const signup = async () => {
  if (!form.value.password || !form.value.email) {
    message.value = "Ainda há campos a serem preenchidos!";
    return;
  }

  const result = await createUser(form.value.email, form.value.password);

  if (result.errorCode) {
    const userResponse = generateUserReponse(result.errorCode, form.value);
    form.value = { email: userResponse.email, password: userResponse.password };
    message.value = userResponse.message;
    return;
  }

  navigateTo("/");
};
</script>
