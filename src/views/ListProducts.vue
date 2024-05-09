<template>
  <div class="container mt-1">
    <div class="card-header">
      <div class="input-group gap-4">
        <input
          type="text"
          class="form-control text-start"
          placeholder="Código ID, Código Interno, Descrição, Código de Barra"
          v-model="searchQuery"
          @keypress.enter="searchProducts"
          autofocus
        />
        <div class="input-group-append">
          <div class="d-flex gap-3">
            <button
              class="btn btn-success"
              type="button"
              @click="searchProducts"
            >
              <i class="bi bi-search-heart-fill"></i>
            </button>
            <router-link to="/createProduct" class="btn btn-warning"
              >Voltar</router-link
            >
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
            <th class="text-center" style="width: 10%">Código Interno</th>
            <th class="text-center" style="width: 10%">Código Barras</th>
            <th class="text-start" style="width: 30%">Produto</th>
            <th class="text-center" style="width: 10%">Unidade</th>
            <th class="text-left" style="width: 10%">Valor</th>
            <th class="text-center" style="width: 10%">#</th>
          </tr>
        </thead>
        <tbody>
          <!-- Linhas da tabela - Aqui você pode iterar sobre os produtos e exibi-los -->
          <tr v-for="(product, index) in products" :key="index">
            <td class="text-center">{{ product.id }}</td>
            <td class="text-center">{{ product.internal_code }}</td>
            <td class="text-center">{{ product.ean_code }}</td>
            <td>{{ product.description }}</td>
            <td class="text-center">{{ product.unit_of_meansure }}</td>
            <td class="text-left">{{ product.sale_value }}</td>
            <td class="text-center">
              <button class="btn btn-danger" @click="deleteProduct(product.id)">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListProducts",
  data() {
    return {
      products: [],
      searchQuery: "",
    };
  },
  methods: {
    loadProducts() {
        axios
          .get("http://localhost:3000/products")
          .then((response) => {
            this.products = response.data;
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

        const filteredProducts = this.products.filter((product) => {
          return (
            String(product.internal_code).toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            String(product.ean_code).toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            String(product.description).toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }).sort((a, b) => {
          if (a.internal_code.toLowerCase() === this.searchQuery.toLowerCase()) return -1;
          if (b.internal_code.toLowerCase() === this.searchQuery.toLowerCase()) return 1;
          if (a.ean_code.toLowerCase() === this.searchQuery.toLowerCase()) return -1;
          if (b.ean_code.toLowerCase() === this.searchQuery.toLowerCase()) return 1;
          return 0;
        });
        this.products = filteredProducts;
      } else {
        this.loadProducts();
      }
    },

    mounted() {
      this.loadProducts();
    },
  },
};
</script>
