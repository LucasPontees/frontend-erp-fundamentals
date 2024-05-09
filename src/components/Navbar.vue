<template>
    <nav id="nav">
        <div class="hamburger" @click="toggleSidebar">
            <div class="line" id="line1"></div>
            <div class="line" id="line2"></div>
            <div class="line" id="line3"></div>
        </div>
        <router-link  to="/" id="logo-url">
            <img  :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/createProduct">Cadastrar Produtos</router-link>
        <router-link to="/Pdv">Pdv</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['logo', 'alt'],
    methods: {
        toggleSidebar() {
            this.$emit('toggleSidebar')
        }
    }
}
</script>

<style scoped>
#nav{
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
#nav #logo-url{
    margin: auto;
    margin-left: 0;
}
#logo{
    width: 40px;
    height: 40px;
}
#nav .hamburger {
    display: none;
}
@media (max-width: 768px) {
    #nav {
        justify-content: space-between;
    }
    #nav .hamburger {
        display: flex;
        cursor: pointer;
    }
    #nav .hamburger .line {
        width: 30px;
        height: 3px;
        background-color: #FCBA03;
        margin: 5px;
    }
}
#nav a{
    color: #FCBA03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}
#nav a:hover{
    color: #FFF;
}
</style>
