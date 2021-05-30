<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div id="data">
      <div>
        <h4>Carlos Villa</h4>
        <p>DNI<br />999 999 999</p>
      </div>
      <div id="image">
        <b-img id="img" width="80rem" src="../assets/someGuy.png" />
      </div>
    </div>
    <h4 id="vtitle">Vehiculo</h4>
    <div id="vehiculo">
      <div>
        <b-img id="carmini" src="../assets/car.svg" />
      </div>
      <div>
        <p>Matricula <br />999 999 999</p>
      </div>
    </div>
    <div id="acompañantes">
      <label for="switch">Acompañantes</label><b-checkbox id="switch" size="lg" switch />
    </div>
    <div id="button">
      <b-button block v-on:click="nextStep">Listo</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Resume",
  components: {
    NavBar,
  },
  props: {
    nextStep: Function,
    previousStep: Function,
  },
  data() {
    return {
      header: "Registrar Visita",
    };
  },
};
</script>

<style scoped>
#carmini {
  width: 3.5rem;
  background: #3bbfad;
  border-radius: 8px 8px 8px 8px;
  margin-right: 0.5rem;
}
#data,
#vehiculo, #vtitle, #acompañantes, #button {
  margin-left: 1rem;
  margin-right: 1rem;
}
#vtitle{
  margin-bottom: 1rem;
}
#data {
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#img {
  border-radius: 7px 7px 7px 7px;
}
#vehiculo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}
#acompañantes{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.btn-secondary {
  background-color: #fc5859;
  border: none;
}
#button{
    position: relative;
    top: 6rem;
}
</style>