<template>
  <NuxtLink to='/secret'> secret </NuxtLink>
  <div v-if="firebaseUser">
    <button class="button" @click="signOut"> Sign out</button>
    <pre>
      {{ firebaseUser }}
    </pre>
  </div>
  <div v-else>
    User is signed out
    <button class="button" @click="signIn"> Sign in</button>
  </div>


</template>

<script setup>
  definePageMeta({
  })



  const firebaseUser = useFirebaseUser()

  const credentials = ref()
  


  const signIn = async () => {
    credentials.value = await signInUser("abc@dfg.com", "123456")
  }
  const signOut = async () => {
    credentials.value = await signOutUser()
  }
</script>