<template>
  <div id="dashboard">
    <img alt="Lunas logo" src="../assets/logo.png" class="imagem" />
    <br>
    <h1>Lunas</h1>
    <p>
      Gestão inteligente de recursos
    </p>
    <h1>Bem vindo a <B id="estabelecimento">Drogaria Farma</b></h1>
    <h3>Ambiente Cadastro</h3>
    <ul>
      <li><router-link to="/CadastroCliente">Clientes</router-link></li>
      <li><router-link to="/Produtos">Produtos</router-link></li>
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
#estabelecimento {
  color:#125c96 ;
}
#dashboard {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
