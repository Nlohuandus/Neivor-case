<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div><b-progress id="progressBar" :value="progress" variant="danger" /></div>
      <h1>Escanea el codigo</h1>
    </div>
    <div>
      <b-img id="image" src="../assets/QRPhone.jpg" />
    </div>
    <div>
      <b-button block variant="primary" v-on:click="nextStep">Scan</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "ScanCode",
  components: {
    NavBar,
  },
  data() {
    return {
      header: "Registrar visita",
    }
  },
  props:{
    nextStep: Function,
    previousStep: Function,
    progress: Number
  }
}
</script>

<style scoped>
#image {
  width: 20rem;
}
</style>