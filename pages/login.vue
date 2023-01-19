<template>
  <Header />
  <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 flex justify-center items-center truncated">
    <Auth
      title="Log in"
      button-text="Entrar"
      @submit="signin"
      :form="form"
      :message="message"
      type= "register"
    />
  </div>
</template>

<script setup>

let form = ref({ email: "", password: "" });
let message = ref("");

const signin = async () => {
  if (!form.value.password || !form.value.email) {
    message.value = "Ainda há campos a serem preenchidos!";
    return;
  }

  const result = await signInUser(form.value.email, form.value.password);

  if (result.errorCode) {
    switch (result.errorCode) {
      case "auth/wrong-password":
        message.value = "Senha inválida!";
        form.value = { email: form.value.email, password: "" };
        return;
      case "auth/user-not-found":
        message.value = "Esse E-mail não está cadastrado!";
        form.value = { email: form.value.email, password: form.value.password };
        return;
      case "auth/internal-error":
        message.value = "Houve um erro interno. Tente novamente mais tarde.";
        return;
      case "auth/invalid-email":
        message.value = "Esse E-mail é invalido!";
        form.value = { email: form.value.email, password: form.value.password };
        return;
      case "auth/too-many-requests":
        message.value =
          "Você tentou entrar nessa conta mais de 100 vezes em uma hora. Tente novamente mais tarde.";
        return;
    }
    console.warn("Há um erro que não possui mensagem de correção!", result.errorCode);
    return;
  }

  navigateTo("/VisaoGeral");
};
</script>