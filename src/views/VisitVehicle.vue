<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div>
        <b-progress :value="progress" />
      </div>
      <h1>¿Que vehiculo usa?</h1>
    </div>
    <div id="iconGroup">
      <b-img
        v-on:click="onSelect"
        v-bind:style="
          selected === 'car'
            ? { backgroundColor: '#34ac9c', border: 'none' }
            : {
                backgroundColor: '#ffffff',
                borderRadius: '8px 8px 8px 8px',
                borderColor: '#515459',
              }
        "
        id="car"
        src="../assets/car.svg"
      />
      <b-img
        v-on:click="onSelect"
        v-bind:style="
          selected === 'bike'
            ? { backgroundColor: '#34ac9c', border: 'none' }
            : {
                backgroundColor: '#ffffff',
                borderRadius: '8px 8px 8px 8px',
                borderColor: '#515459',
              }
        "
        id="bike"
        src="../assets/bike.svg"
      />
      <b-img
        v-on:click="onSelect"
        v-bind:style="
          selected === 'moto'
            ? { backgroundColor: '#34ac9c', border: 'none' }
            : {
                backgroundColor: '#ffffff',
                borderRadius: '8px 8px 8px 8px',
                borderColor: '#515459',
              }
        "
        id="moto"
        src="../assets/moto.svg"
      />
    </div>
    <div id="input">
      <label for="plate">Matricula</label>
      <b-input placeholder="999 999 999" id="plate" />
    </div>

    <div id="buttons">
      <b-button block v-on:click="nextStep">Siguiente</b-button>
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
    progress: Number,
  },
  data() {
    return {
      header: "Registrar visita",
      selected: "car",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    onSelect: function (e) {
      e.preventDefault();
      this.selected = e.target.id;
    },
  },
};
</script>

<style scoped>
#iconGroup {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem;
}
#car {
  padding: 1rem;
  border-radius: 8px 8px 8px 8px;
}
#moto,
#bike,
#car {
  width: 6rem;
}
#bike,
#moto,
#car {
  padding: 1rem;
  border: solid 1.5px;
  border-radius: 8px 8px 8px 8px;
  border-color: #515459;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
label[for="plate"] {
  font-size: 0.9rem;
  margin-bottom: -0.1rem;
}
.btn-secondary {
  position: relative;
  top: 28.8vh;
  background-color: #fc5859;
  border: none;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>