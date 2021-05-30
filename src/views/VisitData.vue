<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div><b-progress id="progressBar" variant="danger" :value="progress"/></div>
    <div>
      <h1>Datos de la visita</h1>
    </div>
    <div id="inputs">
      <label for="name"> Nombre y Apellido</label>
      <b-input placeholder="Carlos Villa" id="name" />
      <label for="dni"> DNI</label>
      <b-input placeholder="999 999 999" id="dni" />
    </div>
    <div id="buttonContainer">
      <b-button id="button" block v-on:click="nextStep">Siguiente</b-button>
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
    previousStep: Function,
    progress: Number,
  },
  data() {
    return {
      header: "Registrar visita",
    };
  },
};
</script>

<style scoped>
#progressBar {
  margin-bottom: 1rem;
}
h1,
label {
  font-family: "Jost", sans-serif;
}
#name,
#dni {
  margin-bottom: 1rem;
}
#inputs {
  margin-right: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
label[for="name"],
label[for="dni"] {
  text-align: left;
  font-size: 0.9rem;
  margin-bottom: -0.1rem;
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
#buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
}
#button {
  height: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
  top: 28vh;
}
.btn-secondary {
  background-color: #fc5859;
  border: none;
}
.progress {
  overflow: visible;
  margin-bottom: 1rem;
}
</style>