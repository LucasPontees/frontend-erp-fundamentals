<template>
  <div>
    <Navbar/>
    <Primeiro-Componente/>
  </div>
</template>

<script>
import Navbar from './components/Nav-bar.vue';
import PrimeiroComponente from './components/Primeiro-Componente.vue';


export default {
  name: "App",
  components: {
    PrimeiroComponente,
    Navbar
  }
}
</script>
