<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div><b-progress id="progressBar" :value="progress" variant="danger" /></div>
      <h2>Scanea el codigo</h2>
    </div>
    <div id="image">
      <b-img width="340rem" src="../assets/QRPhone.jpg" />
    </div>
    <div id="buttons">
      <b-button block v-on:click="nextStep">Scan</b-button>
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
h2{
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}
#image{
  display: flex;
  justify-content: center;
  align-items:center ;
}
.btn-secondary {
  background-color: #fc5859;
  border: none;
}
#buttons{
  position: relative;
  top: 23vh;
}
</style>