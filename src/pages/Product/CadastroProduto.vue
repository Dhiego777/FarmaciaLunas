<template>
  <div class="d-flex justify-content-start mb-3 ms-5">
    <router-link to="/Produtos">
      <button type="button" class="btn btn-primary mt-3 mr-5" id="new-cliente">
        <b>Voltar</b>
      </button>
    </router-link>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <h1>Cadastro de Produtos</h1>
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3 mt-2">
        <label for="classificacao" class="form-label">Classificação</label>
        <form>
          <select
            class="form-control mt-2"
            v-model="product.classificacao"
            name="classificacao"
            id="classificacao"
          >
            <option value="-1" disabled>Selecione a classificação</option>
            <option value="S">Não classificado</option>
            <option value="N">Similar</option>
            <option value="1">Referencia</option>
            <option value="2">Genérico</option>
          </select>
        </form>
        <div class="row d-flex justify-content-center">
          <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3">
            <label class="form-label">Principio Ativo</label>
            <input
              maxlength="100"
              type="text"
              class="form-control"
              placeholder="Digite aqui o Nome"
              v-model="product.principio_ativo"
            />
          </div>
        </div>
        <label for="classe_terapeutica" class="form-label">Classe Terapeutica </label>
        <form>
          <select
            class="form-control mt-2"
            v-model="product.classe_terapeutica"
            name="classe_terapeutica"
            id="classe_terapeutica"
          >
            <option value="-1" disabled>Selecione a classe terapeutica</option>
            <option value="S">Não classificado</option>
            <option value="N">Similar</option>
            <option value="1">Referencia</option>
            <option value="2">Genérico</option>
          </select>
        </form>
        <div class="row d-flex justify-content-center">
          <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3">
            <label class="form-label">Descrição</label>
            <input
              maxlength="100"
              type="text"
              class="form-control"
              placeholder="Digite aqui a descrição"
              v-model="product.descricao"
            />
          </div>
        </div>
        <label for="unidade" class="form-label">Unidade </label>
        <form>
          <select
            class="form-control mt-2"
            v-model="product.unidade"
            name="unidade"
            id="unidade"
          >
            <option value="-1" disabled>Selecione a unidade</option>
            <option value="2">Ampola</option>
            <option value="2">Bolsa</option>
            <option value="2">Capsula</option>
            <option value="N">Comprimido</option>
            <option value="2">Dragea</option>
            <option value="2">Frasco</option>
            <option value="2">Frasco-ampola</option>
            <option value="2">Grama</option>
            <option value="1">Mililitro</option>
            <option value="2">Seringa</option>
            <option value="S">UI</option>
            <option value="2">Unidade</option>
          </select>
        </form>
        <div class="row d-flex justify-content-center">
          <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3">
            <label class="form-label">Fabricante</label>
            <input
              maxlength="100"
              type="text"
              class="form-control"
              placeholder="Digite aqui a descrição"
              v-model="product.fabricante"
            />
          </div>
        </div>
        <div class="row d-flex justify-content-center">
      <div class="col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3">
        <label class="form-label">Valor</label>
        <input
          type="number"
          class="form-control"
          placeholder="Preço"
          max="999"
          maxlength="3"
          v-model="product.valor"
        />
      </div>
      <div class="col-md-5 col-lg-4 col-xl-4 col-xxl-3 mb-3">
        <label class="form-label">Quantidade</label>
        <input
          type="number"
          class="form-control"
          placeholder="Quantidade"
          max="999999999"
          maxlength="9"
          v-model="product.quantidade"
        />
      </div>
    </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3 mt-2">
        <div class="d-grid gap-2 mt-2">
          <button
            v-on:click="saveProduct"
            type="button"
            class="btn btn-primary btn-block"
          >
            <b>Cadastrar</b>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Api
import productApi from "../../api/product";

//import Class
import Product from "../../models/product";

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
      product: new Product({}),
    };
  },
  methods: {
    saveProduct() {
      productApi
        .create(this.product)
        .then(() => {
          this.product = new Product({});
          this.toast.success("Produto cadastrado com sucesso");
        })
        .catch((err) => {
          this.toast.error("Erro ao cadastrar o produto");
        });
    },
  },
};
</script>