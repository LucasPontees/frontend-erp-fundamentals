<template>
  <div class="main-container">
    <div class="row" id="tela_pdv">

      <div class="col-lg-5 col-md-5" style="height: 65vh;">
        <div class="card">
          <router-link to="/SearchProductPdv" class="btn btn-primary mt-2 mx-3">
            <i class="fas fa-plus me-1"></i> F2 - Pesquisar produto
          </router-link>
          <div class="d-flex flex-column gap-3">
            <Inputs placeholder="Quantidade" />
            <Inputs placeholder="Valor" disabled="true" />
            <Inputs placeholder="Total" disabled="true" />
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <img class="animated bounceIn img-thumbnail" src="/img/no-product.jpg"
          style="width: 280px; height: auto;" /></div>
      </div>

      <div class="col-lg-7 col-md-7" style="height: 65vh">
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
          <div class="card-body no-gutters" id="cardTabelaResultado" style="
                  position: relative;
                  height: 100%;
                  overflow-y: scroll;
                  overflow-x: hidden;
                ">
            <div id="cardSemitens" class="form-group row">
              <div class="col-12 text-center" style="
                      align-items: center;
                      display: flex;
                      flex-direction: row;
                      flex-wrap: wrap;
                      justify-content: center;
                    ">
                <img class="animated bounceIn" src="/img/carrinho-vazio.png"
                  style="width: 280px; height: auto; padding-top: 5%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Inputs from '../components/utilsPdv/Inputs.vue';

export default {
  name: 'Pdv',
  components: {
    Inputs
  }
}

</script>
