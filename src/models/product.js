module.exports = class Product {
    constructor(product) {
      this.classificacao = product.classificacao || "-1"
      this.principio_ativo = product.principio_ativo || ""
      this.classe_terapeutica = product.classe_terapeutica || "-1"
      this.descricao = product.descricao
      this.unidade = product.unidade || "-1"
      this.fabricante = product.fabricante
      this.valor = product.valor
      this.quantidade = product.quantidade
      
    }
  }