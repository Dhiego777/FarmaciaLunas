<template>
  <div class="row" style="margin: auto">
    <div class="col-12" style="padding-left: 100px; margin-right: -10px">
      <div class="row w-75">
        <div class="col">
          <label class="form-label">CPF</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="cpfHelp"
            placeholder="Digite aqui o CPF"
            v-model="cpf"
          />
        </div>
      </div>
      <div class="row w-75">
        <div class="col">
          <label class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            placeholder="Digite aqui o Nome"
            v-model="nome"
          />
        </div>
      </div>
      <div class="row w-75">
        <div class="col">
          <label class="form-label">Idade</label>
          <input
            type="number"
            class="form-control"
            placeholder="Digite aqui a Idade"
            v-model="idade"
          />
        </div>
      </div>
      <div class="row w-75">
        <div class="col">
          <label class="form-label">Endereço</label>
          <input
            type="number"
            class="form-control"
            placeholder="Digite aqui a Idade"
            v-model="idade"
          />
        </div>
      </div>
      <div class="row w-75">
        <div class="col">
          <label class="form-label">Telefone</label>
          <!-- Fazer dois campos para o ddd e o telefone  -->
          <input
            type="number"
            class="form-control"
            placeholder="Digite aqui a Idade"
            v-model="idade"
          />
        </div>
      </div>
      <div class="row w-75">
        <div class="col">
          <label class="form-label">CEP</label>
          <input
            type="number"
            class="form-control"
            placeholder="Digite aqui a Idade"
            v-model="idade"
          />
        </div>
      </div>
      <div class="row w-75">
        <div class="col">
          <label class="form-label">Sexo</label>
          <input
            type="number"
            class="form-control"
            placeholder="Digite aqui a Idade"
            v-model="idade"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      cpf: this.cpf,
      nome: this.nome,
      idade: this.idade,
    };
  },
};
</script>
