<template>
  <div class="container-fluid front">
    <div class="row location">Front-end</div>
    <div
      v-for="course in frontEnd"
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
        <a :href="course.link" target="_blank" class="btn button-front"
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
      frontEnd: [],
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      for (let subject in this.$store.state.roadmap) {
        if (
          this.$store.state.roadmap[subject].tema === "Web" ||
          this.$store.state.roadmap[subject].tema === "Javascript" ||
          this.$store.state.roadmap[subject].tema === "CSS"
        ) {
          this.frontEnd.push(this.$store.state.roadmap[subject]);
          this.$store.commit("setFrontEnd", this.frontEnd);
        }
      }
      this.frontEnd = this.$store.state.frontEnd;
    },
  },
};
</script>
<style>
.front {
  background-position: center !important;
  background-size: cover !important;
  background: linear-gradient(
      rgba(156, 58, 140, 0.76),
      rgba(155, 56, 138, 0.644)
    ),
    url("../../../src/assets/pexels-markus-spiske-330771.jpg") no-repeat;
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
.button-front {
  background-color: rgba(156, 58, 140) !important;
  color: white !important;
}
.button-front:hover {
  background-color: rgb(110, 41, 99) !important;
  color: white !important;
}
.card:hover{
  opacity: 0.9;
}
</style>