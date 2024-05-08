<template>
  <div class="container mt-4 col-md-6">
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="submitForm" class="form-group d-flex flex-column gap-3">
      <div class="form-control ">
        
      <label for="descricao">Descrição:</label>
      <input type="text" id="descricao" v-model="descricao" required class="form-control" />

      <label for="unidade">Unidade de Medida:</label>
      <select id="unidade" v-model="unidadeMedida" required class="form-control">
        <option value="kg">Kilogram (kg)</option>
        <option value="g">Gram (g)</option>
        <option value="l">Liter (l)</option>
        <option value="m">Meter (m)</option>
        <option value="cm">Centimeter (cm)</option>
      </select>

      <label for="valor">Valor:</label>
      <input type="text" id="valor" v-model="valor" required class="form-control" />

      <label for="codigoInterno">Codigo Interno:</label>
      <select id="codigoInterno" v-model="codigoInterno" required class="form-control">
        <option value="atx-01">Atx-01</option>
        <option value="atx-02">Atx-02</option>
        <option value="atx-03">Atx-03</option>
        <option value="atx-04">Atx-04</option>
        <option value="atx-05">Atx-05</option>
      </select>
      
      <label for="codigoBarras">codigoBarras:</label>
      <input type="text" id="codigoBarras" v-model="codigoBarras" required class="form-control" />
      </div>
      <div class="d-flex justify-content-end gap-3">
        <button type="submit" class="btn btn-primary">Cadastrar Produto</button>
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
