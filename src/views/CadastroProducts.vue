<template>
  <div class="page-wrapper">
    <div class="container container-fluid">
      <div class="row" v-show="isTelaPdvVisible">
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
          <div class="d-flex gap-3">
            <button type="submit">Cadastrar Produto</button>
            <button @click="isTelaPdvVisible = false">Ver produtos</button>
          </div>
        </form>
      </div>
      <div class="row" v-show="!isTelaPdvVisible">
        <div class="card">
          <div class="card-header">
            <table class="table table-bordered table-nowrap">
              <thead style="position: sticky; top: 0; z-index: 1">
                <tr>
                  <th class="text-start" style="width: 10%">Código</th>
                  <th class="text-start" style="width: 50%">Produto</th>
                  <th class="text-center" style="width: 10%">Unid.Venda</th>
                  <th class="text-left" style="width: 10%">ValorVenda</th>
                </tr>
              </thead>
              <tbody>
                <!-- Linhas da tabela - Aqui você pode iterar sobre os produtos e exibi-los -->
                <tr v-for="(produto, index) in produtos" :key="index">
                  <td>{{ produto.codigo }}</td>
                  <td>{{ produto.descricao }}</td>
                  <td>{{ produto.unidadeMedida }}</td>
                  <td>{{ produto.valor }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button @click="isTelaPdvVisible = true">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CadastroProducts",
  data() {
    return {
      descricao: "",
      unidadeMedida: "",
      valor: "",
      isTelaPdvVisible: true,
      produtos: [],
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/products", {
          descricao: this.descricao,
          unidadeMedida: this.unidadeMedida,
          valor: this.valor,
        })
        .then((response) => {
          alert("Produto cadastrado com sucesso!");
          console.log(response.data);
          this.loadProducts();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    loadProducts() {
      axios
        .get("http://localhost:3000/products")
        .then((response) => {
          this.produtos = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
      }
  },
  mounted() {
    this.loadProducts();
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
