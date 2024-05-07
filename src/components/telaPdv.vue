<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <div v-show="isTelaPdvVisible">
        <div class="row" id="tela_pdv">
          <div class="col-lg-5 col-md-5" style="height: 75vh">
            <div class="card">
              <div class="card-title">
                <img src="/img/Burger.png" alt="" />
              </div>
              <div class="card-body flex-column">
                <button
                  @click="isTelaPdvVisible = false"
                  class="btn mb-0 btn-primary btn-block w-100"
                >
                  <i class="fas fa-plus me-1"></i> F2 - Pesquisar produto
                </button>
                <div class="d-flex flex-column gap-5 mt-3">
                  <div class="d-flex flex-column gap-3">
                    <Inputs placeholder="Quantidade" />
                    <Inputs placeholder="Valor" disabled="true" />
                    <Inputs placeholder="Total" disabled="true" />
                  </div>
                  <div class="d-flex justify-content-center img-thumbnail">
                    <img
                      src="/img/Burger.jpg"
                      alt=""
                      height="150px"
                      width="auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7" style="height: 75vh">
            <div class="card">
              <div class="card-header mt-3 table-responsive">
                <table class="table table-bordered table-nowrap">
                  <thead style="position: sticky; top: 0; z-index: 1">
                    <tr>
                      <th class="text-start" style="width: 10%">Código</th>
                      <th class="text-start" style="width: 50%">Produto</th>
                      <th class="text-center" style="width: 10%">Unid.Venda</th>
                      <th class="text-left" style="width: 10%">ValorVenda</th>
                      <th class="text-center" style="width: 10%">Qtde</th>
                      <th class="text-end" style="width: 10%">Total</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <div
                class="card-body no-gutters"
                id="cardTabelaResultado"
                style="
                  position: relative;
                  height: 100%;
                  overflow-y: scroll;
                  overflow-x: hidden;
                "
              >
                <div id="cardSemitens" class="form-group row">
                  <div
                    class="col-12 text-center"
                    style="
                      align-items: center;
                      display: flex;
                      flex-direction: row;
                      flex-wrap: wrap;
                      justify-content: center;
                    "
                  >
                    <img
                      class="animated bounceIn"
                      src="/img/carrinho-vazio.png"
                      style="width: 280px; height: auto; padding-top: 5%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="!isTelaPdvVisible">
        <div class="row" id="tela_pesquisa_produto">
          <div class="col-lg-12 col-md-12" style="height: 65vh">
            <div class="input-group gap-4">
              <input
                type="text"
                class="form-control text-start"
                placeholder="Código ID, Código Interno, Descrição, Código de Barra"
              />
              <div class="input-group-append">
                <button class="btn btn-success" type="button">
                  <i class="bi bi-search-heart-fill"></i>
                </button>
              </div>
            </div>
            <div class="card-body mt-3 table-responsive" style="max-height: 500px; overflow-y: auto; overflow-x: hidden">
                <table class="table table-bordered table-nowrap">
                  <thead style="position: sticky; top: 0; z-index: 1">
                    <tr>
                      <th class="text-start" style="width: 10%">Código</th>
                      <th class="text-start" style="width: 50%">Produto</th>
                      <th class="text-center" style="width: 10%">Unid.Venda</th>
                      <th class="text-left" style="width: 10%">ValorVenda</th>
                      <th class="text-center" style="width: 10%">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Linhas da tabela - Aqui você pode iterar sobre os produtos e exibi-los -->
                    <tr v-for="(produto, index) in produtos" :key="index">
                      <td>{{ produto.id }}</td>
                      <td>{{ produto.descricao }}</td>
                      <td>{{ produto.unidadeMedida }}</td>
                      <td>{{ produto.valor }}</td>
                      <td class="text-center"><button class="btn btn-success"><i class="bi bi-pencil-square"></i></button></td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <button
              @click="voltarTelaPdv"
              class="btn mb-0 btn-primary btn-block w-100"
            >
              <i class="fas fa-plus me-1"></i> Voltar para PDV
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Inputs from "./utilsPdv/Inputs.vue";
import Lines from "./utilsPdv/Lines.vue";
export default {
  name: "telaPdv",
  data() {
    return {
      isTelaPdvVisible: true,
      numTimes: 5,
      unidadeMedida: "",
      valor: "",
      produtos: [],
      descricao: "",
    };
  },
  methods: {
    voltarTelaPdv() {
      this.isTelaPdvVisible = true;
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
  },
  mounted() {
    this.loadProducts();
  },
  components: {
    Inputs,
    Lines,
  },
};
</script>
