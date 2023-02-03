<template>
    <div class="main">

        <div class="flex flex-col items-center justify-center">
            <label for="input" class="">Envie aqui a foto do seu personagem!</label>
        
            <input 
                id="input" 
                type="file" 
                class="file-input file-input-sm file-input-bordered file-input-primary w-full max-w-xs bg-transparent bg-gray-400/75 mb-2" 
                accept="image/*"
                @change="onChange"
                ref="file"
            >
        </div>

        <div
            :class="classes"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
        > <font-awesome-icon icon="fa-solid fa-file-arrow-down" class="text-5xl" /> <p>Arraste aqui</p></div>
    
    </div>
</template>

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
      this.onChange();
      this.classes = 'flex flex-col items-center justify-center text-sky-500 w-full h-5/6 border-2 border-dashed rounded-md border-sky-500 p-2 mt-2';
    },
  },
};
</script>