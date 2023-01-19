<template>
    <div class="w-screen h-screen bg-gradient-to-r from-bgColor1 to-bgColor2 truncate overflow-y-scroll overflow-x-hidden z-0">
        <CharacterHeader class="sticky top-0 z-10" />
        <div class="h-2/4 flex flex-col text-white items-center mt-10">
            <div class="flex w-9/12 h-4/6 flex items-center justify-center text-2xl">
                <div class="flex flex-col items-center justify-center w-5/12 h-3/6 mr-1 rounded-2xl border border-slate-600 shadow-md shadow-cyan-500 active:translate-y-px">
                    <h2>Vida</h2>
                    <p><input type="text" value="99" class="bg-transparent w-6 outline-none">/99</p>
                </div>
                <div class="flex flex-col items-center justify-center w-5/12 h-3/6 ml-1 rounded-2xl border border-slate-600 shadow-md shadow-cyan-500 active:translate-y-px">
                    <h2>Mana</h2>
                    <p><input type="text" value="99" class="bg-transparent w-6 outline-none">/99</p>
                </div>
            </div>
            <div class="flex w-9/12 h-4/6 flex items-center justify-center text-2xl">
                <div class="flex flex-col items-center justify-center w-5/12 h-3/6 mr-1 rounded-2xl border border-slate-600 shadow-md shadow-cyan-500 active:translate-y-px">
                    <h2>Vigor</h2>
                    <p><input type="text" value="99" class="bg-transparent w-6 outline-none">/99</p>
                </div>
                <div class="flex flex-col items-center justify-center w-5/12 h-3/6 ml-1 rounded-2xl border border-slate-600 shadow-md shadow-cyan-500 active:translate-y-px">
                    <h2>Sanidade</h2>
                    <p><input type="text" value="99" class="bg-transparent w-6 outline-none">/99</p>
                </div>
            </div>
        </div>
    </div>
</template>