<template>
    <div>
        <slot />
    </div>
</template>

<style lang="css" scoped>
    @import url('https://fonts.cdnfonts.com/css/american-typewriter');
    *{
        font-family: 'American Typewriter',sans-serif;
        letter-spacing: 2px;
    }
</style>

<!-- eslint-disable-next-line vue/component-tags-order -->
<script setup>
    useHead({
        link: [{ rel: 'website icon', href: '@@/images/logo.png'}]
    })
</script>