<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div>
        <!-- progress amount receibed by invoker -->
        <b-progress id="progressBar" :value="progress"/> 
      </div>
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
      header: "Registrar visita", //set navbar title
    };
  },
  props: {
    nextStep: Function, //next and previous from invoker 
    previousStep: Function,
    progress: Number,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}
#image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-secondary {
  background-color: #fc5859;
  border: none;
}
#buttons {
  position: relative;
  top: 23vh;
}
</style>