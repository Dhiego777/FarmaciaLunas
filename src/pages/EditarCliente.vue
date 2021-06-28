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
      <h1>Editar Cliente</h1>
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3 mt-2">
        <label class="form-label">CPF</label>
        <input
          maxlength="11"
          type="text"
          class="form-control"
          placeholder="Digite aqui o CPF"
          v-model="user.cpf"
          disabled
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
          v-model="user.nome"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-5 col-lg-4 col-xl-4 col-xxl-3 mb-3">
        <label for="sexo">Sexo</label>
        <form>
          <select
            class="form-control mt-2"
            v-model="user.sexo"
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
          max="999"
          type="number"
          class="form-control"
          placeholder="Digite aqui a Idade"
          @input="updateAge"
          :value="user.idade"
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
          v-model="user.place.cep"
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
          v-model="user.place.logradouro"
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
          v-model="user.place.bairro"
        />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3">
        <label class="form-label">Cidade</label>
        <input
          maxlength="30"
          type="text"
          class="form-control"
          placeholder="Digite aqui o Cidade"
          v-model="user.place.localidade"
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
          v-model="user.place.numero"
        />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3">
        <label class="form-label">Complemento</label>
        <input
          maxlength="10"
          type="text"
          class="form-control"
          placeholder="Complemento"
          v-model="user.place.complemento"
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
          :value="user.telefone.ddd"
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
          :value="user.telefone.telefone"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3 mt-2">
        <div class="d-grid gap-2 mt-2">
          <button
            v-on:click="updateUser"
            type="button"
            class="btn btn-primary btn-block"
          >
            <b>Atualizar</b>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//Components

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
      user: new User({}),
    };
  },
  watch: {
    "user.place.cep": function (value) {
      if (value.length === 8) {
        this.getDetailsFromViaCep();
      }
    },
    $route: {
      immediate: true,
      handler: function (newRoute) {
        try {
          this.getUser(newRoute.query.cpf);
        } catch (error) {
          console.error("CCCCCCC", error);
        }
      },
    },
  },

  methods: {
    getDetailsFromViaCep: function () {
      // HTTP get https://viacep.com.br/ws/${this.cep}/json/
      fetch(`https://viacep.com.br/ws/${this.user.place.cep}/json/`)
        .then((response) => {
          response.json().then((json) => {
            delete json.complemento;
            delete json.cep;
            this.user.place = { ...this.user.place, ...json };
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async updateUser() {
      await userApi
        .put(this.user)
        .then(() => {
          this.toast.success("Cadastro atualizado");
          window.location = "#/Clientes";
        })
        .catch(() => {
          this.toast.error("Erro ao cadastrar");
        });
    },
    getUser(cpf) {
      userApi
        .getOne(cpf)
        .then(({ data }) => {
          if (data) {
            this.user = new User(data);
          }
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
    updateAge(event) {
      const age = event.target.value
      if (age.length <= 3) {
        this.user.idade = age
      }
      this.$forceUpdate()
    },
    updateDdd(event) {
      const ddd = event.target.value
      if (ddd.length <= 3) {
        this.user.telefone.ddd = ddd
      }
      this.$forceUpdate()
    },
    updateTelefone(event) {
      const telefone = event.target.value
      if (telefone.length <= 9) {
        this.user.telefone.telefone = telefone
      }
      this.$forceUpdate()
    },
  },
};
</script>