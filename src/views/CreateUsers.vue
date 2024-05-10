<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="mb-3">
                    <label for="userName" class="form-label">Nome de Usuário</label>
                    <input type="text" class="form-control" id="userName" v-model="userName" required>
                  </div>
                  <div class="mb-3">
                    <label for="userEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="userEmail" v-model="userEmail" required>
                  </div>
                  <div class="mb-3">
                    <label for="userPhone" class="form-label">Telefone</label>
                    <input type="tel" class="form-control" id="userPhone" v-model="userPhone">
                  </div>
                  <div class="mb-3">
                    <label for="userOffice" class="form-label">Cargo</label>
                    <input type="text" class="form-control" id="userOffice" v-model="userOffice">
                  </div>
                  <div class="mb-3">
                    <label for="userCpf" class="form-label">CPF</label>
                    <input type="text" class="form-control" id="userCpf" v-model="userCpf">
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
             
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="mb-3">
                    <label for="userCep" class="form-label">CEP</label>
                    <div class="input-group">
                      <input type="text" class="form-control" id="userCep" v-model="userCep">
                      <button class="btn btn-outline-secondary" type="button" @click="getAddressByCep">Buscar</button>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="userAddress" class="form-label">Logradouro</label>
                    <input type="text" class="form-control" id="userAddress" v-model="userAddress" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="userNeighborhood" class="form-label">Bairro</label>
                    <input type="text" class="form-control" id="userNeighborhood" v-model="userNeighborhood" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="userLocality" class="form-label">Localidade</label>
                    <input type="text" class="form-control" id="userLocality" v-model="userLocality" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="userState" class="form-label">Estado</label>
                    <input type="text" class="form-control" id="userState" v-model="userState" disabled>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="float-end mt-2">
          <button type="submit" class="btn btn-primary" @click="submitForm">Cadastrar</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateUsers',
  data() {
    return {
      userName: '',
      userCep: '',
      userAddress: '',
      userNeighborhood: '',
      userLocality: '',
      userState: '',
      userEmail: '',
      userPhone: '',
      userOffice: '',
      userCpf: '',
    };
  },
  methods: {
    async getAddressByCep() {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${this.userCep}/json/`);
        if (response.data.erro) {
          alert('CEP não encontrado. Por favor, insira um CEP válido.');
        } else {
          this.userAddress = response.data.logradouro;
          this.userNeighborhood = response.data.bairro;
          this.userLocality = response.data.localidade;
          this.userState = response.data.uf;
        }
      } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        alert('Ocorreu um erro ao buscar o endereço. Por favor, tente novamente.');
      }
    },
    submitForm() {
      // Aqui você pode enviar os dados do usuário para o backend
      axios.post('http://localhost:3000/users', {
        userName: this.userName,
        userCep: this.userCep,
        userAddress: this.userAddress,
        userNeighborhood: this.userNeighborhood,
        userLocality: this.userLocality,
        userState: this.userState,
        userCpf: this.userCpf,
        userOffice: this.userOffice,
        userPhone: this.userPhone,
        userEmail: this.userEmail
      }).then(() => {
        alert('Usuário criado com sucesso!');
        this.$router.push("/Pdv");
      }).catch((error) => {
        console.error(error);
        alert('Ocorreu um erro ao criar o usuário. Por favor, tente novamente.');
      });
    }
  }
};
</script>