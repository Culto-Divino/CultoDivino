<template>
  <div
    class="w-full min-h-16 h-16 bg-black/25 flex items-center justify-evenely mt-2"
  >
    <img
      :src="image"
      alt=""
      class="w-11 h-11 ml-2 rounded"
      @click="redirect()"
    />
    <span class="w-1/3 truncate ml-2" @click="redirect()">
      <p class="text-sm">Nome</p>
      <p class="text-2xl">{{ name }}</p>
    </span>
    <span class="w-1/5 ml-5" @click="redirect()">
      <p class="text-sm">Peso</p>
      <p class="text-2xl">{{ weight }}</p>
    </span>
    <span class="w-1/5" @click="redirect()">
      <p v-if="amount" class="text-xs pc:text-sm">Quantidade</p>
      <p v-if="amount" class="text-2xl">{{ amount }}</p>
    </span>
    <label for="my-modal-1" class="text-2xl w-1/12 cursor-pointer"
      ><font-awesome-icon icon="fa-solid fa-ellipsis-vertical"
    /></label>
  </div>

  <input id="my-modal-1" type="checkbox" class="modal-toggle" />
  <label
    for="my-modal-1"
    class="modal cursor-pointer modal-middle cel:modal-bottom "
  >
    <label
      class="modal-box relative bg-transparent w-10/12 h-2/6 p-2 cel:h-4/6"
      for=""
    >
      <ItemModal />
    </label>
  </label>
</template>

<script setup>
  const props = defineProps({
    image: String,
    name: String,
    weight: String,
    amount: String,
    itemid: String,
  })

  const route = useRoute()

  async function redirect() {
    const itemURL = `/items/${props.itemid}?characterId=${route.params.characterId}&redirected=true`
    await navigateTo(itemURL)
  }
</script>
