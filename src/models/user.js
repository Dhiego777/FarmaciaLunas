module.exports = class User {
  constructor() {
    this.cpf = ""
    this.nome = ""
    this.idade = 0
    this.sexo = "nada"
    this.cep = ""
    this.place = {
      logradouro: "",
      bairro: "",
      localidade: "",
      numero: "",
      complemento: "",
      id_cliente: "",
    }
    this.telefone = {
      ddd: "",
      numero: "",
      id_cliente: "",
    }
  }
}
