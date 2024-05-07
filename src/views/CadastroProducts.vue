<template>
  <div class="page-wrapper">
    <div class="container container-fluid mt-3">
      <div class="row" v-show="isTelaPdvVisible">
        <h2>Cadastro de Produto</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" v-model="descricao" />
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
        <div class="card-header">
          <div class="input-group gap-4">
            <input
              type="text"
              class="form-control text-start"
              placeholder="Código ID, Código Interno, Descrição, Código de Barra"
              v-model="searchQuery"
              @keypress.enter="searchProducts"
            />
            <div class="input-group-append">
              <div class="d-flex gap-3">
                <button class="btn btn-success" type="button">
                  <i class="bi bi-search-heart-fill"></i>
                </button>
                <button @click="isTelaPdvVisible = true">Voltar</button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card-body mt-3 table-responsive"
          style="max-height: 500px; overflow-y: auto; overflow-x: hidden"
        >
          <table class="table table-bordered table-nowrap">
            <thead style="position: sticky; top: 0; z-index: 1">
              <tr>
                <th class="text-center" style="width: 10%">Código</th>
                <th class="text-start" style="width: 50%">Produto</th>
                <th class="text-center" style="width: 10%">Unidade</th>
                <th class="text-left" style="width: 10%">Valor</th>
                <th class="text-center" style="width: 10%">#</th>
              </tr>
            </thead>
            <tbody>
              <!-- Linhas da tabela - Aqui você pode iterar sobre os produtos e exibi-los -->
              <tr v-for="(produto, index) in produtos" :key="index">
                <td class="text-center">{{ produto.id }}</td>
                <td>{{ produto.descricao }}</td>
                <td class="text-center">{{ produto.unidadeMedida }}</td>
                <td class="text-left">{{ produto.valor }}</td>
                <td class="text-center">
                  <button
                    class="btn btn-danger"
                    @click="deleteProduct(produto.id)"
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
      id: "",
      descricao: "",
      unidadeMedida: "",
      valor: "",
      isTelaPdvVisible: true,
      produtos: [],
      searchQuery: "",
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
        })
        .then((response) => {
          console.log(response.data);
          this.loadProducts();
          this.descricao = "";
          this.unidadeMedida = "";
          this.valor = "";
          this.searchProducts(); // Iniciar pesquisa após o cadastro
        })
        .catch((error) => {
          console.error(error);
          alert("Erro ao cadastrar o produto");
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
    },
    deleteProduct(id) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then((response) => {
          console.log(response.data);
          this.loadProducts();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    searchProducts() {
      if (this.searchQuery.trim() !== "") {
        axios
          .get(`http://localhost:3000/products?search=${this.searchQuery}`)
          .then((response) => {
            this.produtos = response.data;
            this.isTelaPdvVisible = false; // Ocultar a tela de cadastro de produtos
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.produtos = []; // Limpar os produtos se a consulta estiver vazia
        this.isTelaPdvVisible = true; // Exibir a tela de cadastro de produtos
      }
    },
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
