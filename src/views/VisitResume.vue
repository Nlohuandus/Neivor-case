<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep"/>

    <div>
      <div><b-progress id="progressBar" :value="90" variant="danger" /></div>
    </div>
    <div>
      <b-icon icon="pencil-fill" />
      <div>
        <h1>Carlos Villa</h1>
      </div>
      <p>DNI</p>
      <p>999 999 999</p>
    </div>
    <div>
      <p>Vehiculo<b-checkbox switch /></p>
    </div>
    <div>
      <b-img id="carmini" src="../assets/car.svg" />
      <div>
        <p>Matricula</p>
        <p>999 999 999</p>
        <b-icon icon="pencil-fill" />
      </div>
    </div>
    <div>
      <p>Acompañantes<b-checkbox switch /></p>
      <div>
        <b-img id="minus" src="../assets/minus.svg" />
        <h2>2</h2>
        <b-img id="plus" src="../assets/plus.svg" />
      </div>
    </div>
    <div>
      <h2>Recordar en favoritos <b-icon icon="star" /></h2>
    </div>
    <div>
      <b-button block variant="primary" v-on:click="nextStep">Listo</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "VisitResume",
  props: {
    nextStep: Function,
    previousStep: Function
  },
  components: {
    NavBar,
  },
  data(){
      return{
          header:"Registrar visita"
      }
  }
};
</script>

<style scoped>
#carmini {
  width: 5rem;
  background: #3bbfad;
  border-radius: 8px 8px 8px 8px;
}
#minus,
#plus {
  width: 2rem;
}
</style>