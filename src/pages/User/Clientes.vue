<template>
  <div class="d-flex justify-content-end mb-3 me-4">
    <router-link to="/CadastroCliente">
      <button type="button" class="btn btn-primary mt-3" id="new-cliente">
        <b>Cadastrar novo cliente</b>
      </button>
    </router-link>
  </div>
  <div class="col d-flex justify-content-center">
    <div class="card">
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="d-flex justify-content-center" id="user-table">
            <table v-if="users.length > 0" class="table tablesorter">
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
                  <td class="break">{{ user.cpf }}</td>
                  <td class="break">{{ user.nome }}</td>
                  <td class="break">{{ user.sexo }}</td>
                  <td class="break">{{ user.idade }}</td>
                  <td class="break">{{ user.cep }}</td>
                  <td class="break">{{ user.logradouro }}</td>
                  <td class="break">{{ user.bairro }}</td>
                  <td class="break">{{ user.localidade }}</td>
                  <td class="break">{{ user.estado }}</td>
                  <td class="break">{{ user.numero }}</td>
                  <td class="break">{{ user.complemento }}</td>
                  <td class="break">{{ user.ddd }}</td>
                  <td class="break">{{ user.telefone }}</td>
                  <td class="text-center">
                    <router-link
                      :to="`/Clientes/EditarCliente?cpf=${user.cpf}`"
                    >
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm me-2 mt-1"
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
                    </router-link>

                    <button
                      type="button"
                      class="btn btn-danger btn-sm me-2 mt-1"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteUser"
                      v-on:click="() => (this.user = user)"
                    >
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
            <div v-else>
              Não existe usuários registrados. Adicione um clicando em
              'Cadastrar novo cliente'
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="deleteUser"
    tabindex="-1"
    aria-labelledby="deleteUserLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteUserLabel">Apagar Usuário</h5>
        </div>
        <div class="modal-body">
          Deseja mesmo apagar o usuário {{ user.nome }} ?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            v-on:click="() => deleteUser(user)"
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//API
import userApi from "../../api/user";

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
      users: [],
      user: "",
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
        })
        .catch((err) => {
          this.toast.error(err);
        });
    },
    deleteUser(user) {
      userApi
        .delete(user.cpf)
        .then((_) => {
          this.getUsers();
          this.toast.success(`Cadastro apagado com sucesso`);
        })
        .catch((err) => {
          this.toast.error(`Erro ao apagar o usuário ${this.user}`);
        });
    },
  },
};
</script>
<style>
.break {
  max-width: 105px;
  min-width: 55px;
  word-wrap: break-word;
}
@media (max-width: 575.99px) {
  #user-table {
    padding-left: 600px;
    overflow: auto;
  }
}
@media (min-width: 576px) and (max-width: 670px) {
  .card {
    padding-left: 564px;
    overflow: auto;
  }
}
@media (min-width: 671px) and (max-width: 991.98px) {
  .card {
    width: 95%;
    padding-left: 560px;
    overflow: auto;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .card {
    width: 97%;
    padding-left: 200px;
    overflow: auto;
  }
}
@media (min-width: 1200px) and (max-width: 1680px) {
  .card {
    width: 97%;
    overflow: auto;
  }
}
@media (min-width: 1681px) {
  .card {
    width: 98%;
  }
}
</style>