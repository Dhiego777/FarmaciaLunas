module.exports = class User {
  constructor() {
    this.cpf = ""
    this.nome = ""
    this.idade = 0
    this.sexo = "-1"
    this.cep = ""
    this.place = {
      logradouro: "",
      bairro: "",
      localidade: "",
      numero: "",
      complemento: "",
    }
    this.telefone = {

      ddd: "",
      numero: "",
    }
  }
}
