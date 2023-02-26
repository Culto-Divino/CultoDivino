<template>
    <div class="main">

        <div class="flex flex-col items-center justify-center">
            <label for="input" class="">{{ label }}</label>
        
            <input 
                id="input" 
                ref="file"
                type="file" 
                class="file-input file-input-sm file-input-bordered file-input-primary w-full max-w-xs bg-transparent bg-gray-400/75 mb-2" 
                accept="image/*"
                @change="onChange"
            >
        </div>

        <div
            :class="classes"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
        > 

        <div id="defaultIcon">
          <font-awesome-icon icon="fa-solid fa-file-arrow-down" class="text-5xl" /> 
        </div>
        <div id="checkIcon" class="hidden">
          <font-awesome-icon icon="fa-regular fa-circle-check" class="text-5xl" /> 
        </div>
        <div id="crossIcon" class="hidden">
          <font-awesome-icon icon="fa-regular fa-circle-xmark" class="text-5xl" /> 
        </div>

        <p id="textArea" class="text-md">Arraste aqui</p>

        </div>
    
    </div>
</template>

<script setup>

defineProps({
  label: String
})

</script>

<script>
export default {
  data() {
    return {
      files: [],
      classes: 'flex flex-col items-center justify-center text-sky-500 w-full h-5/6 border-2 border-dashed rounded-md border-sky-500 p-2 mt-2'
    };
    
  },
  methods: {
    onChange() {
      this.files = [...this.$refs.file.files];
    },
    dragover(e) {
      e.preventDefault();
      this.classes = 'flex flex-col items-center justify-center text-sky-700 w-full h-5/6 border-2 border-dashed rounded-md border-sky-700 p-2 mt-2 bg-slate-400/25'
    },
    dragleave() {
      this.classes = 'flex flex-col items-center justify-center text-sky-500 w-full h-5/6 border-2 border-dashed rounded-md border-sky-500 p-2 mt-2';
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;

      const textArea = document.querySelector('#textArea')
      const defaultIcon = document.querySelector('#defaultIcon')
      const checkIcon = document.querySelector('#checkIcon')
      const crossIcon = document.querySelector('#crossIcon')

      if(e.dataTransfer.files[0]?.type.startsWith('image/')){

        this.classes = 'flex flex-col items-center justify-center text-green-500 w-full h-5/6 border-2 border-dashed rounded-md border-green-500 p-2 mt-2'

        defaultIcon.classList.add('hidden')
        crossIcon.classList.add('hidden')
        checkIcon.classList.remove('hidden')

        textArea.innerText = 'Imagem Enviada!'

      }else{

        this.classes = 'flex flex-col items-center justify-center text-red-700 w-full h-5/6 border-2 border-dashed rounded-md border-red-700 p-2 mt-2'
      
        defaultIcon.classList.add('hidden')
        checkIcon.classList.add('hidden')
        crossIcon.classList.remove('hidden')

        textArea.innerText = 'Envie uma Imagem!'

      }

      // this.classes = 'flex flex-col items-center justify-center text-sky-500 w-full h-5/6 border-2 border-dashed rounded-md border-sky-500 p-2 mt-2';
    },
  },
};
</script>