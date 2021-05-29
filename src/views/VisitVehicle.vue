<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep"/>

    <div>
      <div><b-progress id="progressBar" :value="progress" variant="danger" /></div>
      <h1>¿Que vehiculo usa?</h1>
    </div>
    <div id="iconGroup">
      <b-img id="car" src="../assets/car.svg" />
      <b-img id="bike" src="../assets/bike.svg" />
      <b-img id="moto" src="../assets/moto.svg" />
    </div>
    <div>
      <label for="plate">Matricula</label>
      <b-input id="plate" />
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
  name: "VisitVehicle",
  props: {
    nextStep: Function,
    previousStep: Function,
    progress: Number
  },
  data(){
    return{
      header: "Registrar visita"
    }
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#iconGroup {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#car {
  width: 7rem;
  background: #3bbfad;
  border-radius: 8px 8px 8px 8px;
}
#bike {
  width: 7rem;
}
#moto {
  width: 7rem;
}
#bike,
#moto {
  border: solid 1px;
  border-radius: 8px 8px 8px 8px;
}
</style>