<template>
    <nav class="navbar">
        <ul class="nav-list">
            <li>
                <RouterLink :to="{ name: 'side1' }" draggable="false">Sau</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'side2' }" draggable="false">Hund</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'side3' }" draggable="false">Kalkulator</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    font-size: 2.5em;
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}

.nav-list {
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
}

.nav-list li {
    width: 100px;
    display: inline-block;
}

.nav-list li:not(:last-child) {
    margin-right: 200px;
}

.navbar a.router-link-exact-active {
    color: rgba(255, 255, 255, 0.2);
}

.navbar a:hover {
    color: rgba(255, 255, 255, 0.5);
}

.navbar a:active {
    color: rgba(255, 255, 255, 0.35);
}

.navbar a.router-link-exact-active:active {
    color: rgba(255, 255, 255, 0.2);
}

.navbar a.router-link-exact-active:hover {
    color: rgba(255, 255, 255, 0.2);
}
</style>