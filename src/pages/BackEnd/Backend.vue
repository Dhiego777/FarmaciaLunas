<template>
  <div class="container-fluid back">
    <div class="row location">Back-end</div>
    <div
      v-for="course in backEnd"
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
        <a :href="course.link" target="_blank" class="btn button-back"
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
      backEnd: [],
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      for (let subject in this.$store.state.roadmap) {
        if (
          this.$store.state.roadmap[subject].tema === "Database" ||
          this.$store.state.roadmap[subject].tema === "API's & Microsevices" ||
          this.$store.state.roadmap[subject].tema === "Tests" ||
          this.$store.state.roadmap[subject].tema === "Linux & Bash" ||
          this.$store.state.roadmap[subject].tema === "Data Science" ||
          this.$store.state.roadmap[subject].tema === "Cloud" ||
          this.$store.state.roadmap[subject].tema === "Java" ||
          this.$store.state.roadmap[subject].tema === "Bash" ||
          this.$store.state.roadmap[subject].tema === "Mensageria" ||
          this.$store.state.roadmap[subject].tema === "Kubernetes"
        ) {
          this.backEnd.push(this.$store.state.roadmap[subject]);
          this.$store.commit("setBackEnd", this.backEnd);
        }
      }
      this.backEnd = this.$store.state.backEnd;
    },
  },
};
</script>
<style>
.back {
  background-position: left !important;
  background-size: cover !important;
  background: linear-gradient(rgba(156, 58, 58, 0.76), rgba(156, 58, 58, 0.76)),
    url("../../../src/assets/pexels-photo-546819-1-676x449.jpeg") no-repeat;
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
.button-back {
  background-color: rgba(156, 58, 58) !important;
  color: white !important;
}
.button-back:hover {
  background-color: rgb(110, 41, 10) !important;
  color: white !important;
}
</style>