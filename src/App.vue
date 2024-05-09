<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <router-view :mostrarRodape="exibirRodape"/>
    <Footer v-if="exibirRodape"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Burger",
      exibirRodape: true
    }
  },
  watch: {
    $route() {
      const path = this.$route.path;

      this.exibirRodape = !(path === '/Pdv' || path === '/SearchProductPdv');
    }
  }
}
</script>


<style>
* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  color: #222;
}
</style>
