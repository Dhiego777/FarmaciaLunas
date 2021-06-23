module.exports = class UserEdit {
  constructor() {
    this.cpf = ""
    this.nome = ""
    this.idade = ""
    this.sexo = "nada"
    this.cep = ""
    this.place = {
      logradouro: "",
      bairro: "",
      localidade: "",
      numero: "",
      complemento: "",
      id_user: "",
    }
    this.telefone = {
      ddd: "",
      numero: "",
      id_user: "",
    }
  }
}
