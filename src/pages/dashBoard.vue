<template>
  <div id="dashboard">
    <img alt="Lunas logo" src="../assets/logo.png" class="imagem" />
    <br>
    <h1>Lunas</h1>
    <p>
      Gestão inteligente de recursos
    </p>
    <h1>Bem vindo a <b id="estabelecimento">Drogaria Farma</b></h1>
    <h3>Ambiente Cadastro</h3>
    <ul>
      <li><router-link to="/Clientes">Clientes</router-link></li>
      <li><router-link to="/Produtos">Produtos</router-link></li>
      <li><a href="#" target="_blank">Entradas</a></li>
    </ul>
    <h3>Ambiente Dispensação</h3>
    <ul>
      <li><router-link to="/Produtos">Iniciar</router-link></li>
    </ul>
    <h3>Ambiente Gestão</h3>
    <ul>
      <li><a href="#" target="_blank">Cadastro de Usuário</a></li>
      <li><a href="#" target="_blank">Relatório</a></li>
    
    </ul>
  </div>
</template>

<script>
// import { roadmapFile } from "../models/datas.js";
export default {
  data() {
    return {
      // frontEnd: [],
      // backEnd: [],
      // publicity: [],
    };
  },
  mounted() {
   
  },
  methods: {
  },
};
</script>

<style>
.size {
  font-size: 40px;
}
.background-front {
  background-position: left !important;
  background-size: cover !important;
  background: linear-gradient(
      rgba(156, 58, 140, 0.76),
      rgba(155, 56, 138, 0.644)
    ),
    url("../../src/assets/seletores-css-e1502494954686.jpg") no-repeat;
}
.imagem {
  width: 175px;
}
.background-publicity {
  background-position: center !important;
  background-size: cover !important;
  background: linear-gradient(
      rgba(194, 122, 14, 0.76),
      rgba(194, 122, 14, 0.76)
    ),
    url("../../src/assets/front-end-e-back-end.jpg") no-repeat;
  /* background-image: url("./seletores-css-e1502494954686.jpg"); */
}
.movimentation > a > button > h3:nth-child(2) {
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out !important;
}
.movimentation:hover > a > button > h3:nth-child(2) {
  height: auto;
  opacity: 1;
}
button > h3 {
  color: white;
}
</style>
