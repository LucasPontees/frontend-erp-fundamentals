<template>
  <div class="card">
    <div class="card-header table-responsive">
      <table
        v-if="burgers"
        class="table table-bordered table-nowrap col-lg-12 col-md-12"
      >
        <thead style="position: sticky; top: 0; z-index: 1">
          <tr>
            <th style="width: 10%;">ID</th>
            <th style="width: 10%;">Cliente</th>
            <th style="width: 10%">Pão</th>
            <th style="width: 10%">Carne</th>
            <th style="width: 10%">Opcionais</th>
            <th style="width: 10%">Status</th>
            <th style="width: 10%">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="burger in burgers" :key="burger.id">
            <td>{{ burger.id }}</td>
            <td>{{ burger.nome }}</td>
            <td>{{ burger.pao }}</td>
            <td>{{ burger.carne }}</td>
            <td>
              <ul>
                <li v-for="opcional in burger.opcionais" :key="opcional">
                  {{ opcional }}
                </li>
              </ul>
            </td>
            <td style="text-align: center">
              <select
                name="status"
                class="status"
                @change="updateBurger($event, burger.id)"
              >
                <option
                  v-for="s in status"
                  :key="s.id"
                  :value="s.tipo"
                  :selected="burger.status == s.tipo"
                >
                  {{ s.tipo }}
                </option>
              </select>
            </td>
            <td style="text-align: center">
              <button class="delete-btn" @click="deleteBurger(burger.id)">
                Cancelar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <h2>Não há pedidos no momento!</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
    };
  },
  methods: {
    async getPedidos() {
      const req = await fetch("http://localhost:3000/burgers");

      const data = await req.json();

      this.burgers = data;

      // Resgata os status de pedidos
      this.getStatus();
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status");

      const data = await req.json();

      this.status = data;
    },
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();

      this.getPedidos();
    },
    async updateBurger(event, id) {
      const option = event.target.value;

      const dataJson = JSON.stringify({ status: option });

      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      console.log(res);
    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>

<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
