<template>
  <div
    class="w-full min-h-16 h-16 rounded-2xl bg-black/25 flex justify-around align-middle items-stretch mt-2"
  >
    <img
      :src="image"
      alt=""
      class="w-11 h-11 ml-2 rounded items-center align-middle justify-center"
      @click="redirect()"
    />
    <span
      class="w-1/3 truncate ml-2 items-center align-middle justify-center"
      @click="redirect()"
    >
      <p class="text-sm">Nome</p>
      <p class="text-2xl">{{ name }}</p>
    </span>
    <span
      class="w-1/6 ml-5 items-center align-middle justify-center"
      @click="redirect()"
    >
      <p class="text-sm">Peso</p>
      <p class="text-2xl">{{ weight }}</p>
    </span>
    <span
      class="w-1/6 items-center align-middle justify-center"
      @click="redirect()"
    >
      <p v-if="amount" class="text-xs pc:text-sm">Quantidade</p>
      <p v-if="amount" class="text-2xl">{{ amount }}</p>
    </span>
    <span
      class="w-1/6 flex items-center align-middle justify-center"
      @click="renderDetails = true"
    >
      <font-awesome-icon
        class="hover:mouse-cursor"
        icon="fa-solid fa-ellipsis-vertical"
      />
    </span>
  </div>

  <Modal :render="renderDetails" @clicked-out="renderDetails = !renderDetails">
    <div>
      <div
        class="w-full h-1/3 flex items-center border-b justify-center cursor-pointer"
      >
        <p class="ml-4">Mandar p/ Armário</p>
        <font-awesome-icon icon="fa-solid fa-box-archive" class="ml-3" />
      </div>
      <div
        class="w-full h-1/3 flex items-center align-middle justify-center border-b cursor-pointer"
      >
        <p class="ml-4">Transferir</p>
        <font-awesome-icon icon="fa-solid fa-right-left" class="ml-3" />
      </div>
      <div
        class="w-full h-1/3 flex items-center align-middle justify-center text-red-700 cursor-pointer"
      >
        <p class="ml-4">Excluir</p>
        <font-awesome-icon icon="fa-regular fa-trash-can" class="ml-3" />
      </div>
    </div>
  </Modal>
</template>

<script setup>
  const renderDetails = ref(false)

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
