<template>
  <div class="d-flex justify-content-start mb-3 ms-5">
    <router-link to="/Clientes">
      <button type="button" class="btn btn-primary mt-3 mr-5" id="new-cliente">
        <b>Voltar</b>
      </button>
    </router-link>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <h1>Cadastro do Cliente</h1>
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3 mt-2">
        <label class="form-label">CPF</label>
        <input
          maxlength="11"
          type="text"
          class="form-control"
          placeholder="Digite aqui o CPF"
          v-model="cliente.cpf"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3">
        <label class="form-label">Nome</label>
        <input
          maxlength="100"
          type="text"
          class="form-control"
          placeholder="Digite aqui o Nome"
          v-model="cliente.nome"
          pattern="[a-zA-Z\s]+$"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-5 col-lg-4 col-xl-4 col-xxl-3 mb-3">
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
      <div class="col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3">
        <label class="form-label">Idade</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui a Idade"
          max="999"
          maxlength="3"
          @input="updateAge"
          :value="cliente.idade"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3">
        <label class="form-label">CEP</label>
        <input
          maxlength="8"
          type="text"
          class="form-control"
          placeholder="Digite aqui o CEP"
          v-model="cliente.place.cep"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3">
        <label class="form-label">Rua</label>
        <input
          maxlength="50"
          type="text"
          class="form-control"
          placeholder="Digite aqui o Endereço"
          v-model="cliente.place.logradouro"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-5 col-lg-4 col-xl-4 col-xxl-3 mb-3">
        <label class="form-label">Bairro</label>
        <input
          maxlength="30"
          type="text"
          class="form-control"
          placeholder="Digite aqui o Bairro"
          v-model="cliente.place.bairro"
        />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3">
        <label class="form-label">Cidade</label>
        <input
          maxlength="30"
          type="text"
          class="form-control"
          placeholder="Digite aqui o Cidade"
          v-model="cliente.place.localidade"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-5 col-lg-4 col-xl-4 col-xxl-3 mb-3">
        <label class="form-label">Numero</label>
        <input
          maxlength="10"
          type="text"
          class="form-control"
          placeholder="Numero"
          v-model="cliente.place.numero"
        />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3">
        <label class="form-label">Complemento</label>
        <input
          maxlength="10"
          type="text"
          class="form-control"
          placeholder="Complemento"
          v-model="cliente.place.complemento"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <label class="form-label">Telefone</label>
      <div class="col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3">
        <label class="form-label">DDD</label>
        <input
          type="number"
          class="form-control"
          placeholder="DDD"
          max="999"
          maxlength="3"
          @input="updateDdd"
          :value="cliente.telefone.ddd"
        />
      </div>
      <div class="col-md-5 col-lg-4 col-xl-4 col-xxl-3 mb-3">
        <label class="form-label">Telefone</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui o telefone"
          max="999999999"
          maxlength="9"
          @input="updateTelefone"
          :value="cliente.telefone.telefone"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3 mt-2">
        <div class="d-grid gap-2 mt-2">
          <button
            v-on:click="cadastrarUser"
            type="button"
            class="btn btn-primary btn-block"
          >
            <b>Cadastrar</b>
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

//toast
import { useToast } from "vue-toastification";

export default {
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      cliente: new User({}),
    };
  },
  watch: {
    "cliente.place.cep": function (value) {
      if (value.length === 8) {
        this.getDetailsFromViaCep();
      }
    },
  },
  methods: {
    getDetailsFromViaCep: function () {
      // HTTP get https://viacep.com.br/ws/${this.cep}/json/
      fetch(`https://viacep.com.br/ws/${this.cliente.place.cep}/json/`)
        .then((response) => {
          response.json().then((json) => {
            delete json.complemento;
            delete json.cep;
            this.cliente.place = { ...this.cliente.place, ...json };
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    cadastrarUser() {
      userApi
        .create(this.cliente)
        .then(() => {
          this.cliente = new User({});
          this.toast.success("Usuário cadastrado com sucesso");
        })
        .catch((err) => {
          this.toast.error("Erro ao cadastrar usuário");
        });
    },
    updateAge(event) {
      const age = event.target.value;
      if (age.length <= 3) {
        this.cliente.idade = age;
      }
      this.$forceUpdate();
    },
    updateDdd(event) {
      const ddd = event.target.value;
      if (ddd.length <= 3) {
        this.cliente.telefone.ddd = ddd;
      }
      this.$forceUpdate();
    },
    updateTelefone(event) {
      const telefone = event.target.value;
      if (telefone.length <= 9) {
        this.cliente.telefone.telefone = telefone;
      }
      this.$forceUpdate();
    },
  },
};
</script>
