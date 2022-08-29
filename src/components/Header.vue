<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
    <header>
        <Navbar />
    </header>
</template>

<style scoped>
header {
    z-index: 5;
    background-color: #0C0C0C;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 15vh;
    width: 100vw;
    top: 0;
    left: 0;
}
</style>
