<template>
  <div class="container mt-4 col-md-6">
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" v-model="descricao" required />
      </div>
      <div class="form-group">
        <label for="unidade">Unidade de Medida:</label>
        <input type="text" id="unidade" v-model="unidadeMedida" required />
      </div>
      <div class="form-group">
        <label for="valor">Valor:</label>
        <input type="text" id="valor" v-model="valor" required />
      </div>
      <div class="form-group">
        <label for="codigoInterno">Codigo Interno:</label>
        <input type="text" id="codigoInterno" v-model="codigoInterno" required />
      </div>
      <div class="form-group">
        <label for="codigoBarras">codigoBarras:</label>
        <input type="text" id="codigoBarras" v-model="codigoBarras" required />
      </div>
      <div class="d-flex gap-3">
        <button type="submit">Cadastrar Produto</button>
        <router-link to="/ListProducts" class="btn btn-success"
          >Ver Produtos</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CadastroProducts",
  data() {
    return {
      id: "",
      descricao: "",
      unidadeMedida: "",
      valor: "",
      codigoInterno: "",
      codigoBarras: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/products", {
          id: this.id,
          descricao: this.descricao,
          unidadeMedida: this.unidadeMedida,
          valor: this.valor,
          codigoInterno: this.codigoInterno,
          codigoBarras: this.codigoBarras,
        })
        .then((response) => {
          console.log(response.data);
          this.descricao = "";
          this.unidadeMedida = "";
          this.valor = "";
          this.codigoInterno = "";
          this.codigoBarras = "";
        })
        .catch((error) => {
          console.error(error);
          alert("Erro ao cadastrar o produto");
        });
    },
  },
};
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
