<script>
export default {
    data() {
        return {
            sum: 0
        }
    },
    mounted() {
        this.calculate();
    },
    methods: {
        calculate() {
            this.sum = parseFloat(document.getElementById("value1").value) + parseFloat(document.getElementById("value2").value)
        }
    }
}
</script>

<template>
    <div id="inputs">
        <input type="number" id="value1" value="0" @keyup="calculate">
        <span id="plus"><svg xmlns="http://www.w3.org/2000/svg" style="color: white" viewBox="0 0 16 16">
                <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
        </span>
        <input type="number" id="value2" value="0" @keyup="calculate">
    </div>
    <span id="equals"> <svg xmlns="http://www.w3.org/2000/svg" style="color: white" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
            <path
                d="M48 192h352c17.69 0 32-14.32 32-32s-14.31-31.1-32-31.1h-352c-17.69 0-32 14.31-32 31.1S30.31 192 48 192zM400 320h-352c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h352c17.69 0 32-14.32 32-32S417.7 320 400 320z" />
        </svg>
    </span>
    <span id="sum">{{  sum  }}</span>
</template>

<style scoped>
input {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    border: none;
    height: 250px;
    width: 250px;
    font-size: 700%;
    text-align: center;
    text-decoration: none;
    user-select: none;
    outline: none;
    color: white;
}

#inputs {
    top: 50vh;
    display: inline-flex;
}

span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    margin: 0 100px 0 100px;
}

#sum {
    top: 50vh;
    position: relative;
    color: white;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50px;
    border: none;
    height: 250px;
    width: 800px;
    font-size: 100px;
    text-decoration: none;
    user-select: none;
    outline: none;
    margin: 0 auto;
}

svg {
    filter: brightness(0%) invert(100%) opacity(25%);
    width: 100px;
    height: 100px;
}

input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

#equals {
    top: 50vh;
}
</style>