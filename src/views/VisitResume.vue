<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div>
        <b-progress id="progressBar" :value="progress" variant="danger" />
      </div>
    </div>
    <div id="data">
      <div>
        <h4>Carlos Villa</h4>
        <p>DNI<br />999 999 999</p>
      </div>
      <b-icon icon="pencil-fill" />
    </div>
    <div id="vehiculoSwitch">
      <label for="vehiculo">Vehiculo</label>
      <b-checkbox size="lg" id="vehiculo" switch />
    </div>
    <div id="carContainer">
      <b-img id="carmini" src="../assets/car.svg" />
      <div>
        <p id="matricula">Matricula<br />999 999 999</p>
      </div>
      <b-icon icon="pencil-fill" />
    </div>
    <div id="company">
      <label for="acompañantes">Acompañantes</label
      ><b-checkbox id="acompañantes" switch />
    </div>
    <div id="counter">
      <b-img id="minus" src="../assets/minus.svg" />
      <h2 id="number">2</h2>
      <b-img id="plus" src="../assets/plus.svg" />
    </div>
    <div id="favorite">
      <b-button id="add" block variant="white"
        >Recordar en favoritos <b-icon id="star" icon="star"
      /></b-button>
    </div>
    <div id="button">
      <b-button block v-on:click="nextStep">Listo</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "VisitResume",
  props: {
    nextStep: Function,
    previousStep: Function,
    progress: Number,
  },
  components: {
    NavBar,
  },
  data() {
    return {
      header: "Registrar visita",
    };
  },
};
</script>

<style scoped>
#data,
#vehiculoSwitch,
#company,
#carContainer,
#counter,
#button,
#favorite {
  margin-left: 1rem;
  margin-right: 1rem;
}
#matricula {
  margin-left: -8rem;
}
#company {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}
#counter {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#vehiculoSwitch {
  display: flex;
  justify-content: space-between;
}
#carContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
#carmini {
  width: 3.5rem;
  background: #3bbfad;
  border-radius: 10px 10px 10px 10px;
}
#number {
  width: 3rem;
  height: 3rem;
  border: solid 1px rgb(94, 94, 94);
  text-align: center;
  border-radius: 10px 10px 10px 10px;
}
#minus {
  margin-right: 1rem;
}
#plus {
  margin-left: 1rem;
}
#star {
  color: yellow;
}
#minus,
#plus {
  width: 2.5rem;
  height: 2.5rem;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 42%);
  border-radius: 3px 3px 3px 3px;
}
#add {
  margin-bottom: 1rem;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 42%);
  font-family: "Jost", sans-serif;
  font-weight: 600;
  color: #616469;
  justify-content: space-between;
  display: flex;
  text-align: left;
}
.btn-secondary {
  background-color: #fc5859;
  border: none;
}
#data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.progress {
  overflow: visible;
  margin-bottom: 1rem;
}
</style>