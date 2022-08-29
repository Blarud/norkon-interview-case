<script>
export default {
    data() {
        return {
            dogs: []
        }
    },
    mounted() {
        //this.getDog();
        setInterval(() => {
            console.log(this.dogs)
        }, 1000)
    },
    methods: {
        getDog() {
            fetch("https://random.dog/woof.json")
                .then((res) => res.json())
                .then((data) => this.dogs.push(data.url))
                .catch((err) => console.log(err))
        },
        removeDog(url) {
            const index = this.dogs.indexOf(url);
            if (index > -1) {
                this.dogs.splice(index, 1);
            }
        }
    }
}
</script>

<template>
    <div id="btn">
        <button @click="getDog">Hent Hund</button>
    </div>
    <div id="gallery" src="about:blank">
        <span id="ghost-text">Hundegalleri</span>
        <ul class="grid">
            <!-- A "grid" view with photos only -->
            <li v-for="image in this.dogs">
                <img :src="image" @click="removeDog(image)">
            </li>
        </ul>
    </div>
</template>

<style scoped>
#ghost-text {
    position: fixed;
    font-size: 50rem;
    color: rgba(255, 255, 255, 0.05);
}

#btn {
    background-color: #0C0C0C;
    position: fixed;
    text-align: center;
    margin-top: calc(15vh - 1px);
    margin-bottom: 5vh;
    width: 300px;
    height: 125px;
    border-radius: 0 0 15px 15px;
    z-index: 1;
    margin-left: calc(50vw - 150px);
}

button {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 2rem;
    color: white;
    width: 250px;
    height: 100px;
    border-radius: 20px;
    cursor: pointer;
    transition: ease-in-out 0.2s;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

button:active {
    background-color: rgba(255, 255, 255, 0.05);
}

img {
    border-radius: 5px;
    width: auto;
    height: 200px;
    transition: ease-in-out 0.2s;
}

img:hover {
    cursor: pointer;
    filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(700%) contrast(.9);
}

#gallery {
    top: 25vh;
    margin: 0 100px 0 100px;
}

.grid {
    list-style: none;
    margin: 0 auto;
    padding: 0px;
    text-align: left;
    width: 100%;
}

.grid li {
    display: inline-block;
    width: auto;
    margin-left: 10px;
}

.grid li:after {
    display: block;
}

.grid li a:hover {
    border: 2px solid #000;
    box-shadow: inset 0 0 90px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset 0 0 90px -10px rgba(0, 0, 0, 1);
    -webkit-box-shadow: inset 0 0 90px -10px rgba(0, 0, 0, 1);
}
</style>
