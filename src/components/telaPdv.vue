<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <div v-show="isTelaPdvVisible">
        <div class="row" id="tela_pdv">
          <div class="col-lg-5 col-md-5">
            <div class="card" style="height: 75vh">
              <div class="card-title">
                <img src="/img/Burger.png" alt="">
              </div>
              <div class="card-body flex-column">
                <button
                  @click="isTelaPdvVisible = false"
                  class="btn mb-0 btn-primary btn-block w-100"
                >
                  <i class="fas fa-plus me-1"></i> F2 - Pesquisar produto
                </button>
                <div class="d-flex flex-column gap-5 mt-5">
                  <Inputs placeholder="Quantidade" />
                  <Inputs placeholder="Valor" />
                  <Inputs placeholder="Total" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="card">
              <div
                class="card-body mt-3 table-responsive"
                style="max-height: 500px; overflow-y: auto; overflow-x: hidden"
              >
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
                  <tbody>
                    <Lines v-for="index in numTimes" :key="index" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="!isTelaPdvVisible">
        <div class="row" id="tela_pesquisa_produto">
          <div class="col-lg-12 col-md-12">
            <div class="card" style="height: 75vh">
              <div class="card-body">
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
    </div>
  </div>
</template>

<script>
import Inputs from "./utilsPdv/Inputs.vue";
import Lines from "./utilsPdv/Lines.vue";
export default {
  name: "telaPdv",
  data() {
    return {
      isTelaPdvVisible: true,
      numTimes: 5,
    };
  },
  methods: {
    voltarTelaPdv() {
      this.isTelaPdvVisible = true;
    },
  },
  components: {
    Inputs,
    Lines,
  },
};
</script>
