<template>
  <div id="dashboard">
    <img alt="Lunas logo" src="../assets/logo.png" class="imagem" />
    
    <h1>Bem vindo a Drogaria Lunas</h1>
    <p>
      Gestão inteligente de recursos
    </p>
    <h3>Ambiente Cadastro</h3>
    <ul>
      <li><a href="#" target="_blank">Clientes</a></li>
      <li><a href="#" target="_blank">Produtos</a></li>
      <li><a href="#" target="_blank">Entradas</a></li>
    </ul>
    <h3>Ambiente Dispensação</h3>
    <ul>
      <li><router-link to="/AmbienteDispensacao">Iniciar</router-link></li>
    </ul>
    <h3>Ambiente Gestão</h3>
    <ul>
      <li><a href="#" target="_blank">Cadastro de Usuário</a></li>
      <li><a href="#" target="_blank">Relatório</a></li>
    
    </ul>
  </div>
</template>

<script>


export default {
};
</script>

<style>

#dashboard {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
}
.imagem {
  width: 175px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
