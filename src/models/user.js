module.exports = class User {
  constructor(user) {
    this.cpf = user.cpf || "",
    this.nome = user.nome || "",
    this.idade = user.idade || "",
    this.sexo = user.sexo || "nada",
    this.place = {
      cep: user.cep || "",
      logradouro: user.logradouro || "",
      bairro: user.bairro || "",
      localidade: user.localidade || "",
      numero: user.numero || "",
      complemento: user.complemento || "",
      id_user: user.id_user || "",
    },
    this.telefone = {
      ddd: user.ddd || "",
      telefone: user.telefone || "",
      id_user: user.id_user || "",
    }
  }
}
