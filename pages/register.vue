<template>
  <div>
    <Auth
      title="Cadastro"
      button-text="Registrar"
      @submit="signup"
      :form="form"
      :message="message"
    />
  </div>
  <div>
    <NuxtLink to="/login"> Já tem uma conta? Entre aqui.</NuxtLink>
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

  console.log(result);

  if (result.errorCode) {
    switch (result.errorCode) {
      case "auth/email-already-in-use":
        message.value = "Uma conta já foi registrada com esse E-mail!";
        form.value = { email: form.value.email, password: "" };
        return;
      case "auth/weak-password":
        message.value = "Sua senha deve ter, no mínimo, 6 caracteres.";
        form.value = { email: form.value.email, password: "" };
        return;
      case "auth/invalid-email":
        message.value = "Esse E-mail é invalido!";
        form.value = { email: form.value.email, password: form.value.password };
        return;
    }
    console.warn("Há um erro que não possui mensagem de correção!", result.errorCode);
    return;
  }

  navigateTo("/");
};
</script>
