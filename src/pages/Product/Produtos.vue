<template>
  <div class="d-flex justify-content-end mb-3 me-4">
    <router-link to="/CadastroProduto">
      <button type="button" class="btn btn-primary mt-3" id="new-product">
        <b>Cadastrar novo produto</b>
      </button>
    </router-link>
  </div>
  <div class="col d-flex justify-content-center">
    <div class="card">
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="d-flex justify-content-center" id="product-table">
            <table v-if="products.length > 0" class="table tablesorter">
              <thead>
                <tr>
                  <th scope="col">#</th>

                  <th scope="col">Classificacao</th>
                  <th scope="col">Principio ativo</th>
                  <th scope="col">Classe terapeutica</th>
                  <th scope="col">Descricao</th>
                  <th scope="col">Unidade</th>
                  <th scope="col">Fabricante</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in products" :key="index">
                  <th>{{ product.idproduct }}</th>
                  <td class="break">{{ product.classificacao }}</td>
                  <td class="break">{{ product.principio_ativo }}</td>
                  <td class="break">{{ product.classe_terapeutica }}</td>
                  <td class="break">{{ product.descricao }}</td>
                  <td class="break">{{ product.unidade }}</td>
                  <td class="break">{{ product.fabricante }}</td>
                  <td class="break">{{ product.valor }}</td>
                  <td class="break">{{ product.quantidade }}</td>
                  <td class="text-center">
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
                    <button
                      type="button"
                      class="btn btn-danger btn-sm me-2 mt-1"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteProduct"
                      v-on:click="() => (this.product = product)"
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
              Não existe produtos registrados. Adicione um clicando em
              'Cadastrar novo produto'
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="deleteProduct"
    tabindex="-1"
    aria-labelledby="deleteProductLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteProductLabel">Apagar Produto</h5>
        </div>
        <div class="modal-body">
          Deseja mesmo apagar o produto {{ product.idproduct }} ?
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
            v-on:click="() => deleteProduct(product)"
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
import productApi from "../../api/product";

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
      products: [],
      product: "",
    };
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    selectedProduct(products) {
      this.getProducts(products);
    },
  },
  methods: {
    getProducts() {
      productApi
        .getAll()
        .then(({ data }) => {
          this.products = data;
        })
        .catch((err) => {
          this.toast.error(err);
        });
    },
    deleteProduct(product) {
      productApi
        .delete(product.idproduct)
        .then((_) => {
          this.getProducts();
          this.toast.success("Produto apagado com sucesso");
        })
        .catch((err) => {
          this.toast.error("Erro ao apagar o produto");
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
</style>
