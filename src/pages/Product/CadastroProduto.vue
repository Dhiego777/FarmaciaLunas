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
            <option value="N/CLASSIF">Não classificado</option>
            <option value="SIMILAR">Similar</option>
            <option value="REFERENCIA">Referencia</option>
            <option value="GENERICO">Genérico</option>
          </select>
        </form>
        <div class="row d-flex justify-content-center">
          <div class="col-xs-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mb-3">
            <label class="form-label">Princípio Ativo</label>
            <input
              maxlength="100"
              type="text"
              class="form-control"
              placeholder="Digite aqui o princípio ativo"
              v-model="product.principio_ativo"
            />
          </div>
        </div>
        <label for="classe_terapeutica" class="form-label"
          >Classe Terapêutica
        </label>
        <form>
          <select
            class="form-control mt-2"
            v-model="product.classe_terapeutica"
            name="classe_terapeutica"
            id="classe_terapeutica"
          >
            <option value="-1" disabled>Selecione a classe terapêutica</option>
            <option value="ANALGESICO">ANALGESICO</option>
            <option value="ANALGESICO / ANTINEURITICO">ANALGESICO / ANTINEURITICO</option>
            <option value="ANALGESICO / ANTITERMICO">ANALGESICO / ANTITERMICO</option>
            <option value="ANALGESICO OPIOIDE">ANALGESICO OPIOIDE</option>
            <option value="ANALGESICO/ANTIPIRETICO">ANALGESICO/ANTIPIRETICO</option>
            <option value="ANESTESICO">ANESTESICO</option>
            <option value="ANESTESICO GERAL">ANESTESICO GERAL</option>
            <option value="ANESTESICO INALATORIO">ANESTESICO INALATORIO</option>
            <option value="ANESTESICO LOCAL">ANESTESICO LOCAL</option>
            <option value="ANSIOLITICO">ANSIOLITICO</option>
            <option value="ANTAGONISTA BENZODIAZEPINICO">ANTAGONISTA BENZODIAZEPINICO</option>
            <option value="ANTAGONISTA DE OPIOIDES">ANTAGONISTA DE OPIOIDES</option>
            <option value="ANTIACIDO / ANTIFISETICO">ANTIACIDO / ANTIFISETICO</option>
            <option value="ANTIANEMICO">ANTIANEMICO</option>
            <option value="ANTIASMATICO">ANTIASMATICO</option>
            <option value="ANTIBACTERIANO">ANTIBACTERIANO</option>
            <option value="ANTIBACTERIANO TOPICO">ANTIBACTERIANO TOPICO</option>
            <option value="ANTIBIOTICO">ANTIBIOTICO</option>
            <option value="ANTICONVULSIVO">ANTICONVULSIVO</option>
            <option value="ANTIEMETICO">ANTIEMETICO</option>
            <option value="ANTIEMETICO / ANTINAUSEANTE">ANTIEMETICO / ANTINAUSEANTE</option>
            <option value="ANTIESPASMODICO">ANTIESPASMODICO</option>
            <option value="ANTIFISETICO">ANTIFISETICO</option>
            <option value="ANTIFLAMATORIO">ANTIFLAMATORIO</option>
            <option value="ANTIGLAUCOMATOSO">ANTIGLAUCOMATOSO</option>
            <option value="ANTIHIPERTENSIVO">ANTIHIPERTENSIVO</option>
            <option value="ANTIHISTAMINICO">ANTIHISTAMINICO</option>
            <option value="ANTIINFECCIOSO OCULAR">ANTIINFECCIOSO OCULAR</option>
            <option value="ANTIINFECCIOSO OFTALMICO">ANTIINFECCIOSO OFTALMICO</option>
            <option value="ANTIINFECCIOSO TOPICO">ANTIINFECCIOSO TOPICO</option>
            <option value="ANTIINFECCIOSO/CICATRIZANTE">ANTIINFECCIOSO/CICATRIZANTE</option>
            <option value="ANTIINFLAMATORIO">ANTIINFLAMATORIO</option>
            <option value="ANTIINFLAMATORIO / ANTI REUMATICO">ANTIINFLAMATORIO / ANTI REUMATICO</option>
            <option value="ANTIINFLAMATORIO / CORTICOSTEROIDE">ANTIINFLAMATORIO / CORTICOSTEROIDE</option>
            <option value="ANTIINFLAMATORIO TOPICO">ANTIINFLAMATORIO TOPICO</option>
            <option value="ANTINFLAMATORIO">ANTINFLAMATORIO</option>
            <option value="ANTIPARASITARIO">ANTIPARASITARIO</option>
            <option value="ANTIPSICOTICO">ANTIPSICOTICO</option>
            <option value="ANTIREUMATICO">ANTIREUMATICO</option>
            <option value="ANTITROMBOTICO">ANTITROMBOTICO</option>
            <option value="ANTIULCEROSO">ANTIULCEROSO</option>
            <option value="BLOQUEADOR NEUROMUSCULAR">BLOQUEADOR NEUROMUSCULAR</option>
            <option value="BRONCODILATADOR">BRONCODILATADOR</option>
            <option value="CERATOLITICO/CERATOPLASTICO">CERATOLITICO/CERATOPLASTICO</option>
            <option value="COLINERGICO">COLINERGICO</option>
            <option value="COLIRIO ANESTESICO">COLIRIO ANESTESICO</option>
            <option value="CORTICOSTEROIDE">CORTICOSTEROIDE</option>
            <option value="CURARIZANTE">CURARIZANTE</option>
            <option value="DESCONGESTIONANTE NASAL">DESCONGESTIONANTE NASAL</option>
            <option value="DESCONGESTIONANTE OFTALMICO">DESCONGESTIONANTE OFTALMICO</option>
            <option value="DIURETICO">DIURETICO</option>
            <option value="ESTIMULANTE DA ERITROPOIDESE">ESTIMULANTE DA ERITROPOIDESE</option>
            <option value="GLICOCORTICOIDE">GLICOCORTICOIDE</option>
            <option value="HEMOSTATICO">HEMOSTATICO</option>
            <option value="HIPERPARATIROIDISMO">HIPERPARATIROIDISMO</option>
            <option value="HIPNOTICO">HIPNOTICO</option>
            <option value="HIPOGLICEMIANTE">HIPOGLICEMIANTE</option>
            <option value="MANIPULADO">MANIPULADO</option>
            <option value="MIDRIATICO">MIDRIATICO</option>
            <option value="MIOTICOS">MIOTICOS</option>
            <option value="REIDRATANTE ORAL">REIDRATANTE ORAL</option>
            <option value="RELAXANTE MUSCULAR / ANALGESICO">RELAXANTE MUSCULAR / ANALGESICO</option>
            <option value="SIMPATOMIMETICO">SIMPATOMIMETICO</option>
            <option value="SOLUCAO OFTALMOLOGICA">SOLUCAO OFTALMOLOGICA</option>
            <option value="VASODILATADOR">VASODILATADOR</option>
            <option value="VASOPRESSOR">VASOPRESSOR</option>
            <option value="VITAMINA">VITAMINA</option>
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
            <option value="AMPOLA">Ampola</option>
            <option value="BOLSA">Bolsa</option>
            <option value="CAPSULA">Capsula</option>
            <option value="COMPRIMIDO">Comprimido</option>
            <option value="DRAGEA">Dragea</option>
            <option value="FRASCO">Frasco</option>
            <option value="FRASCO-AMPOLA">Frasco-ampola</option>
            <option value="GRAMA">Grama</option>
            <option value="MILILITRO">Mililitro</option>
            <option value="SERINGA">Seringa</option>
            <option value="UI">UI</option>
            <option value="UNIDADE">Unidade</option>
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