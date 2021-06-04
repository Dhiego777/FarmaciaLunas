<template>
  
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
