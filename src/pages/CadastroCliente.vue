<template>
  <!-- Botao com lista de cadastro e um para Editar Cadastro -->
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <h1>Cadastro de Cliente</h1>
      <div class="col-6 mb-3 mt-2">
        <label class="form-label">CPF</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o CPF"
          v-model="cliente.cpf"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <label class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o Nome"
          v-model="cliente.nome"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-3 mb-3">
        <label for="sexo">Sexo</label>
        <form>
          <select
            class="form-control mt-2"
            v-model="cliente.sexo"
            name="sexo"
            id="sexo"
          >
            <option value="nada" disabled>Selecione o Sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </form>
      </div>
      <div class="col-3 mb-3">
        <label class="form-label">Idade</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui a Idade"
          v-model="cliente.idade"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <label class="form-label">CEP</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o CEP"
          v-model="cliente.cep"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <label class="form-label">Rua</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o Endereço"
          v-model="cliente.place.logradouro"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-2 mb-3">
        <label class="form-label">Bairro</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o Bairro"
          v-model="cliente.place.bairro"
        />
      </div>
      <div class="col-2 mb-3">
        <label class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o Cidade"
          v-model="cliente.place.localidade"
        />
      </div>
      <div class="col-1 mb-3">
        <label class="form-label">Numero</label>
        <input
          type="text"
          class="form-control"
          placeholder="Numero"
          v-model="cliente.place.numero"
        />
      </div>
      <div class="col-1 mb-3">
        <label class="form-label">Complemento</label>
        <input
          type="text"
          class="form-control"
          placeholder="Complemento"
          v-model="cliente.place.complemento"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <label class="form-label">Telefone</label>
      <div class="col-3 mb-3">
        <label class="form-label">DDD</label>
        <input
          type="number"
          class="form-control"
          placeholder="DDD"
          v-model="cliente.telefone.ddd"
        />
      </div>
      <div class="col-3 mb-3">
        <label class="form-label">Telefone</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui o telefone"
          v-model="cliente.telefone.numero"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <div class="d-grid gap-2 mt-2">
          <button
            v-on:click="cadastrarUser"
            type="button"
            class="btn btn-primary btn-block"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Api
import userApi from "../api/user";

//import Class
import User from "../models/user";

export default {
  data() {
    return {
      cliente: new User(),
    };
  },
  watch: {
    "cliente.cep": function (value) {
      if (value.length === 8) {
        this.getDetailsFromViaCep();
      }
    },
  },
  methods: {
    getDetailsFromViaCep: function () {
      // HTTP get https://viacep.com.br/ws/${this.cep}/json/
      fetch(`https://viacep.com.br/ws/${this.cliente.cep}/json/`)
        .then((response) => {
          response.json().then((json) => {
            this.cliente.place = { ...this.cliente.place, ...json };
          });
        })
        .catch((e) => {
          alert(e);
        });
    },
    cadastrarUser() {
      userApi
        .create(this.cliente)
        .then(() => {
          this.cliente = new User()
        })
        .catch();
      console.log(this.cliente);
    },
  },
};
</script>
