<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div>
        <b-progress id="progressBar" :value="progress" />
      </div>
      <h2>Algunos datos más</h2>
    </div>
    <div>
      <div id="daySwitch">
        <label for="visit"> Visita de varios dias</label>
        <b-form-checkbox
          id="visit"
          v-model="isChecked"
          value="1"
          unchecked-value="0"
          switch
          size="lg"
        ></b-form-checkbox>
      </div>
      <transition name="slide-fade">
      <div key=1 id="true" v-if="isChecked === '1'">
        <div>
          <label for="start">Dia de inicio</label>
          <b-datepicker :style="'width:45vw'" placeholder="Hoy" id="start" />
        </div>
        <div>
          <label for="end">Dia de de fin</label>
          <b-datepicker placeholder="Hoy" :style="'width:45vw'" id="end" />
        </div>
      </div>
      <div key=2 id="today" v-else>
        <label for="day">Dia de visita</label>
        <b-datepicker :style="'width:91.5vw'" placeholder="Hoy" id="day" />
      </div>
      </transition>
      <div id="typeContainer">
        <label for="visitType"> Tipo de visita</label>
        <b-form-input placeholder="Social" list="visitType"></b-form-input>
        <datalist id="visitType">
          <option>Social</option>
        </datalist>
      </div>
      <div id="switch">
        <label for="car">¿Viene en coche?</label
        ><b-form-checkbox size="lg" id="car" switch />
      </div>
    </div>

    <div id="buttons">
      <b-button id="button" block v-on:click="nextStep">Siguiente</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "VisitType",
  data() {
    return {
      isChecked: "0",
      header: "Registrar visita",
    };
  },
  props: {
    nextStep: Function,
    previousStep: Function,
    progress: Number,
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#daySwitch {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
h2 {
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
}
#true {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.b-form-btn-label-control.form-control {
  flex-direction: row-reverse;
}
label[for="start"],
label[for="day"],
label[for="end"],
label[for="visitType"] {
  font-size: 0.9rem;
  margin-bottom: -0.9rem;
}
#switch {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.btn-secondary {
  position: relative;
  top: 19.4vh;
  background-color: #fc5859;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
#button{
  font-size: 1.3rem;
}
.slide-fade-enter-active {
  transition: all .3s ease;
  position: relative;
  left: 0;
  top: 0;
  
}
.slide-fade-leave-active {
  position: relative;
  left: 0;
  top: 0;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>