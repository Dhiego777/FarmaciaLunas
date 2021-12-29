<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col px-0 background-front movimentation">
        <router-link to="/Frontend">
          <button
            type="button"
            class="bg-transparent w-100 h-100 shadow-sm border-0"
          >
            <h3 class="mb-0 size">Front-end</h3>
            <h3 class="m-auto w-75">
              O desenvolvedor front-end é responsável pela experiência do
              usuário dentro de uma aplicação web, é ele quem vai desenhar e
              desenvolver as páginas com as quais, posteriormente, o usuário irá
              interagir.
            </h3>
          </button>
        </router-link>
      </div>
      <div class="col px-0 background-back movimentation">
        <router-link to="/Backend">
          <button
            type="button"
            class="bg-transparent btn-dynad w-100 h-100 shadow-sm border-0"
          >
            <h3 class="mb-0 size">Back-end</h3>
            <h3 class="m-auto w-75">
              O back-end trabalha em boa partes dos casos fazendo a ponte entre
              os dados que vem do navegador rumo ao banco de dados e vice-versa,
              sempre aplicando as devidas regras de negócio, validações e
              garantias em um ambiente onde o usuário final não tenha acesso e
              possa manipular algo
            </h3>
          </button>
        </router-link>
      </div>
      <div class="col px-0 background-publicity movimentation">
        <router-link to="/Publicity">
          <button
            type="button"
            class="bg-transparent btn-dynad w-100 h-100 shadow-sm border-0"
          >
            <h3 class="mb-0 size">Publicidade</h3>
            <h3 class="m-auto w-75">
              Publicidade é a estratégia de marketing que envolve a compra de
              espaço em um veículo de mídia para divulgar um produto, serviço ou
              marca, com o objetivo de atingir o público-alvo da empresa e
              incentivá-lo a comprar. Porém, essa é uma definição limitante da
              publicidade, que envolve muito mais que a compra de um produto.
            </h3>
          </button>
        </router-link>
      </div>
    </div>
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
.background-back {
  background-position: left !important;
  background-size: cover !important;
  background: linear-gradient(rgba(156, 58, 58, 0.76), rgba(156, 58, 58, 0.76)),
    url("../../src/assets/pexels-photo-546819-1-676x449.jpeg") no-repeat;
  /* background-image: url("./seletores-css-e1502494954686.jpg"); */
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
