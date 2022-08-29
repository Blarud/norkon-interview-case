<script setup>
const msg = 'Hello!'
let playSound = () => new Audio("https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6f/Sheep2.ogg").play();
</script>

<template>
    <button id="sheep_btn" @click="playSound">
        <img draggable=false src="https://www.pngall.com/wp-content/uploads/2018/06/Lamb-Free-Download-PNG.png">
    </button>
</template>

<style scoped>
button {
    top: 25vh;
    cursor: pointer;
    background: none;
    border: none;
    user-select: none;
    transition: ease-in-out 0.2s;
}

button:hover {
    filter: opacity(75%);
}

button:active {
    filter: opacity(25%);
}
</style>