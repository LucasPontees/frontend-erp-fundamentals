<template>
    <form @submit.prevent="submitForm">
    <input type="text" v-model="name" placeholder="Nome">
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="description" placeholder="Senha">
    <button type="submit">Cadastrar</button>
  </form>
  </template>
  
  <script>
  import Inputs from '@/components/utilsPdv/Inputs.vue';
  import axios from 'axios';
  
  export default {
    name: 'CadastroUsers',
    components: {
      Inputs,
    },
    data() {
      return {
        name: '',
        email: '',
        description: '',
      };
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:3000/users', {
          name: this.name,
          email: this.email,
          description: this.description,
        })
          .then(response => {
            alert('Cadastrado com sucesso!');
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      },
      voltar() {
        this.isCadProdutosVisible = true;
      },
    },
  };
  </script>
  
  <style scoped>
  v-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }

  /* Estilo para o formulário */
form {
  width: 300px;
  margin: 0 auto;
}

/* Estilo para os campos de entrada */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Estilo para o botão de envio */
button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

  </style>