<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container"> <!-- Adiciona uma classe container para alinhar os elementos -->
        <a class="navbar-brand" href="#">Meu Site</a> <!-- Adiciona um link para a home do site -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">Click</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto"> <!-- Alinha os itens à direita -->
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  .navbar-brand {
    font-size: 1.5rem;
  }
  </style>
  