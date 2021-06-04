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
          v-model="cpf"
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
          v-model="nome"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-3 mb-3">
        <label for="sexo">Sexo</label>
        <form>
          <select class="form-control mt-2" v-model="sexo" name="sexo" id="sexo">
            <option value="-1" disabled>Selecione o Sexo</option>
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
          </select>
        </form>
      </div>
      <div class="col-3 mb-3">
        <label class="form-label">Idade</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui a Idade"
          v-model="idade"
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
          v-model="cep"
        />
        <div class="d-grid gap-2 mt-2">
          <button
            type="button"
            @click="getDetailsFromViaCep()"
            class="btn btn-primary btn-block"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <label class="form-label">Rua</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o Endereço"
          v-model="place.logradouro"
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
          v-model="place.bairro"
        />
      </div>
      <div class="col-2 mb-3">
        <label class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui o Cidade"
          v-model="place.localidade"
        />
      </div>
      <div class="col-1 mb-3">
        <label class="form-label">Numero</label>
        <input
          type="text"
          class="form-control"
          placeholder="Numero"
          v-model="place.numero"
        />
      </div>
      <div class="col-1 mb-3">
        <label class="form-label">Complemento</label>
        <input
          type="text"
          class="form-control"
          placeholder="Complemento"
          v-model="place.complemento"
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
          v-model="telefone.ddd"
        />
      </div>
      <div class="col-3 mb-3">
        <label class="form-label">Telefone</label>
        <input
          type="number"
          class="form-control"
          placeholder="Digite aqui o telefone"
          v-model="telefone.numero"
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 mb-3">
        <div class="d-grid gap-2 mt-2">
          <button type="button" class="btn btn-primary btn-block">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import axios

export default {
  data() {
    return {
      cpf: 0,
      nome: "",
      idade: 0,
      sexo: "-1",
      cep: "",
      place: {
        logradouro: "",
        bairro: "",
        localidade: "",
        numero: "",
        complemento: "",
      },
      telefone: {
        ddd: "",
        numero: "",
      },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    getDetailsFromViaCep: function () {
      // HTTP get https://viacep.com.br/ws/${this.cep}/json/
      fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then((response) => {
          response.json().then((json) => {
            this.place = json;
          });
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
};
</script>
