<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep"/>
    <div>
      <div><b-progress id="progressBar" :value="10" variant="danger" /></div>
      <h1>Datos de la visita</h1>
    </div>
    <div>
      <label for="name"> Nombre y Apellido</label>
      <b-input id="name" />
      <label for="dni"> DNI</label>
      <b-input id="dni" />
    </div>
    <div>
      <b-button block variant="primary" v-on:click="nextStep"
        >Siguiente</b-button
      >
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "VisitData",
  components: { NavBar },
  props: {
    nextStep: Function,
    previousStep: Function
  },
  data() {
    return {
      header: "Registrar visita",
    };
  },
};
</script>

<style scoped>
</style>