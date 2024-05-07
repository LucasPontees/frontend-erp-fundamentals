<template>
    <div>
      <h2>Cadastro de Produto</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="descricao">Descrição:</label>
          <input type="text" id="descricao" v-model="descricao" required>
        </div>
        <div class="form-group">
          <label for="unidade">Unidade de Medida:</label>
          <input type="text" id="unidade" v-model="unidadeMedida" required>
        </div>
        <div class="form-group">
          <label for="valor">Valor:</label>
          <input type="text" id="valor" v-model="valor" required>
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CadastroProducts',
    data() {
      return {
        descricao: '',
        unidadeMedida: '',
        valor: ''
      };
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:3000/products', {
          descricao: this.descricao,
          unidadeMedida: this.unidadeMedida,
          valor: this.valor
        })
        .then(response => {
          alert('Produto cadastrado com sucesso!');
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  