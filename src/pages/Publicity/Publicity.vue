<template>
  <div class="container-fluid ad">
    <div class="row location">Publicidade</div>
    <div
      v-for="course in publicity"
      :key="course.id"
      class="card col-8 col-md-7 col-lg-6 m-auto mt-5 shadow"
    >
      <div
        class="row mx-0 card-header"
        style="border: none !important; background: white"
      >
        <h5 class="col-6 d-flex justify-content-start px-0">
          {{ course.tipo }} {{ course.tema }}
        </h5>
        <h5 class="col-6 d-flex justify-content-end px-0" style="opacity: 0.6">
          {{ course.nivel }}
        </h5>
      </div>
      <div class="card-body">
        <h5 class="card-title mt-0">{{ course.title }}</h5>
        <p class="card-text" style="opacity: 0.6">🔗{{ course.link }}</p>
        <a :href="course.link" target="_blank" class="btn button-Ad"
          >Acessar Curso</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      publicity: [],
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      for (let subject in this.$store.state.roadmap) {
        if (
          this.$store.state.roadmap[subject].tema === "Geral" ||
          this.$store.state.roadmap[subject].tema === "DevOps" ||
          this.$store.state.roadmap[subject].tema === "Business"
        ) {
          this.publicity.push(this.$store.state.roadmap[subject]);
          this.$store.commit("setPublicity", this.publicity);
        }
      }
      this.publicity = this.$store.state.publicity;
    },
  },
};
</script>
<style>
.ad {
  background-position: center !important;
  background-size: cover !important;
  background: linear-gradient(
      rgba(194, 122, 14, 0.76),
      rgba(194, 122, 14, 0.76)
    ),
    url("../../../src/assets/front-end-e-back-end.jpg") no-repeat;
  background-attachment: fixed;
  min-height: 100%;
}
.location {
  font-size: 40px;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.397);
  z-index: 9999;
}
.button-Ad {
  background-color: rgba(194, 122, 14) !important;
  color: white !important;
}
.button-Ad:hover {
  background-color: rgb(154, 84, 14) !important;
  color: white !important;
}
</style>