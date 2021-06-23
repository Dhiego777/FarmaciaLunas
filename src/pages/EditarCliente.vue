<template>
  <div class="d-flex justify-content-start mb-3 ms-5">
    <router-link to="/Clientes">
      <button type="button" class="btn btn-primary mt-3 mr-5" id="new-cliente">
        Voltar
      </button>
    </router-link>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <h1>Editar Cliente</h1>
      <div class="col-6 mb-3 mt-2">
        <label class="form-label">CPF</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o CPF"
          v-model="user.cpf"
          disabled
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
          v-model="user.nome"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-3 mb-3">
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
      <div class="col-3 mb-3">
        <label class="form-label">Idade</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui a Idade"
          v-model="user.idade"
        >
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <label class="form-label">CEP</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o CEP"
          v-model="user.place.cep"
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
          v-model="user.place.logradouro"
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
          v-model="user.place.bairro"
        />
      </div>
      <div class="col-2 mb-3">
        <label class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o Cidade"
          v-model="user.place.localidade"
        />
      </div>
      <div class="col-1 mb-3">
        <label class="form-label">Numero</label>
        <input
          type="text"
          class="form-control"
          placeholder="Numero"
          v-model="user.place.numero"
        />
      </div>
      <div class="col-1 mb-3">
        <label class="form-label">Complemento</label>
        <input
          type="text"
          class="form-control"
          placeholder="Complemento"
          v-model="user.place.complemento"
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
          v-model="user.telefone.ddd"
        />
      </div>
      <div class="col-3 mb-3">
        <label class="form-label">Telefone</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui o telefone"
          v-model="user.telefone.telefone"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <div class="d-grid gap-2 mt-2">
          <button
            v-on:click="updateUser"
            type="button"
            class="btn btn-primary btn-block"
          >
            Atualizar
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

export default {
  data() {
    return {
      user: new User({}),
    };
  },
  watch: {
    "user.place.cep": 
      function (value) {
      if (value.length === 8) {
        this.getDetailsFromViaCep();
      }
    },
    $route: {
      immediate: true,
      handler: function (newRoute) {
        
        try{
          this.getUser(newRoute.query.cpf);
        }
        catch(error) {
          console.error("CCCCCCC", error)
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
            delete json.complemento
            delete json.cep
            this.user.place = { ...this.user.place, ...json};
          });
        })
        .catch((e) => {
          alert(e);
        });
    },
    async updateUser() {
      await userApi
        .put(this.user)
        .then(() => {
          window.location = "#/Clientes";
        })
        .catch(e => {
          console.error("BBBBBB", e)
        });
    },
    getUser(cpf){
      userApi
        .getOne(cpf)
        .then(({ data }) => {
          if(data){
            this.user = new User(data);
          }
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }
  },
};
</script>