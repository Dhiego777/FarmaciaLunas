<template>
  <div class="d-flex justify-content-end mb-3 mr-5" style="margin-right: 1rem;">
    <router-link to="/CadastroCliente">
      <button type="button" class="btn btn-primary mt-3 mr-5" id="new-cliente">
        Cadastrar novo cliente
      </button>
    </router-link>
  </div>
  <div class="d-flex justify-content-center">
    <table class="table tablesorter">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CPF</th>
          <th scope="col">Nome</th>
          <th scope="col">Sexo</th>
          <th scope="col">Idade</th>
          <th scope="col">CEP</th>
          <th scope="col">Rua</th>
          <th scope="col">Bairro</th>
          <th scope="col">Cidade</th>
          <th scope="col">Estado</th>
          <th scope="col">Número</th>
          <th scope="col">Complemento</th>
          <th scope="col">DDD</th>
          <th scope="col">Telefone</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th>{{ user.iduser }}</th>
          <td>{{ user.cpf }}</td>
          <td>{{ user.nome }}</td>
          <td>{{ user.sexo }}</td>
          <td>{{ user.idade }}</td>
          <td>{{ user.cep }}</td>
          <td>{{ user.rua }}</td>
          <td>{{ user.bairro }}</td>
          <td>{{ user.cidade }}</td>
          <td>{{ user.estado }}</td>
          <td>{{ user.numero }}</td>
          <td>{{ user.complemento }}</td>
          <td>{{ user.ddd }}</td>
          <td>{{ user.telefone }}</td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-primary btn-sm mr-1 mt-1"
              v-on:click="() => editUser(user)"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                ></path>
              </svg>
            </button>
            <button type="button" class="btn btn-danger btn-sm mt-1">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
//API
import userApi from "../api/user";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  watch: {
    selectedUser(users) {
      this.getUsers(users);
    },
  },
  methods: {
    getUsers() {
      userApi
        .getAll()
        .then(({ data }) => {
          this.users = data;
          console.log(this.users);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
    createUser() {
      userApi
        .create()
        .then((adasd) => {
          this.getUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editUser(user) {

    },
  },
};
</script>
