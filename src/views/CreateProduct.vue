<template>
  <div class="container mt-4 col-md-6">
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="submitForm" class="form-group d-flex flex-column gap-3">
      <div class="form-control ">
        
      <label for="description">Descrição:</label>
      <input type="text" id="description" v-model="description" required class="form-control" />

      <label for="unit_of_meansure">Unidade de Medida:</label>
      <select id="unit_of_meansure" v-model="unit_of_meansure" required class="form-control">
        <option value="kg">Kilograma (kg)</option>
        <option value="g">Grama (g)</option>
        <option value="l">Litro (l)</option>
        <option value="m">Metro (m)</option>
        <option value="cm">Centimetro (cm)</option>
      </select>

      <label for="sale_value">Valor:</label>
      <input type="decimal" id="sale_value" v-model="sale_value" required class="form-control" />

      <label for="internal_code">Codigo Interno:</label>
      <select id="internal_code" v-model="internal_code" required class="form-control">
        <option value="atx-01">Atx-01</option>
        <option value="atx-02">Atx-02</option>
        <option value="atx-03">Atx-03</option>
        <option value="atx-04">Atx-04</option>
        <option value="atx-05">Atx-05</option>
      </select>
      
      <label for="ean_code">Cód.Barras:</label>
      <input type="text" id="ean_code" v-model="ean_code" required class="form-control" />
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
  name: "CreateProduct",
  data() {
    return {
      id: "",
      description: "",
      unit_of_meansure: "",
      sale_value: "",
      internal_code: "",
      ean_code: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/products", {
          id: this.id,
          description: this.description,
          unit_of_meansure: this.unit_of_meansure,
          sale_value: this.sale_value,
          internal_code: this.internal_code,
          ean_code: this.ean_code,
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/ListProducts");
          alert("Cadastrado com sucesso!");
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
