<template>
    <div class="w-full min-h-16 h-16 bg-black/25 flex items-center justify-evenly mt-2">
        <img :src="image" alt="" class="w-12 h-12 ml-3 rounded">
        <span class="w-1/3 truncate">
            <p class="text-sm">Nome</p>
            <p class="text-2xl">{{ name }}</p>
        </span>
        <span class="w-1/4 ml-3">
            <p class="text-sm">Peso</p>
            <p class="text-2xl ">{{ weight }}</p>
        </span>
        <label for="my-modal-1" class="text-2xl w-1/12" ><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></label>
    </div>

    <input id="my-modal-1" type="checkbox" class="modal-toggle"/>
    <label for="my-modal-1" class="modal cursor-pointer modal-middle cel:modal-bottom">
        <label class="modal-box relative bg-transparent w-10/12 h-3/6 p-2 cel:h-4/6" for="">
          <ItemModal
          :itemurl="itemURL"
          />
        </label>
    </label>
</template>

<script setup>

const props = defineProps({
    image: String,
    name: String,
    weight: String,
    itemid: String
})

const itemURL = `/items/${props.itemid}`

</script>