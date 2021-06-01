<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div>
        <b-progress id="progressBar" :value="progress" />
      </div>
    </div>
    <div id="data">
      <div>
        <h4>Carlos Villa</h4>
        <p>DNI<br />999 999 999</p>
      </div>
      <b-icon icon="pencil-fill" v-on:click="backToZero()"/>
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
      <b-icon icon="pencil-fill" v-on:click="previousStep()" />
    </div>
    <div id="company">
      <label for="acompañantes">Acompañantes</label
      ><b-checkbox id="acompañantes" size="lg" switch />
    </div>
    <div id="counter">
      <b-img v-on:click="remove()" id="minus" src="../assets/minus.svg" />
      <h2 id="number">{{count}}</h2>
      <b-img v-on:click="add()" id="plus" src="../assets/plus.svg" />
    </div>
    <div id="favorite">
      <b-button id="add" v-on:click="favorite()" class="whitheButton" block variant="white"
        >Recordar en favoritos <b-icon v-bind:icon="isFavorite ? 'star-fill' : 'star'" id="star"
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
    backToZero: Function,
    progress: Number,
  },
  components: {
    NavBar,
  },
  data() {
    return {
      header: "Registrar visita",
      count: 0,
      isFavorite: false
    };
  },
  methods:{
    add: function(){
      this.count++
    },
    remove: function(){
      this.count != 0 ? this.count-- : this.count = 0
    },
    favorite: function (){
      this.isFavorite ? this.isFavorite=false : this.isFavorite=true
    }
  }
};
</script>

<style scoped>
label{
  font-size: 1.5rem;
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
  padding: 0.5rem;
  width: 3.5rem;
  background: #3bbfad;
  border-radius: 7px 7px 7px 7px;
}
#number {
  width: 2rem;
  height: 2rem;
  border: solid 1px rgb(105, 104, 104);
  text-align: center;
  font-size: 1.5rem;
  border-radius: 5px 5px 5px 5px;
}
#minus {
  margin-right: 1rem;
}
#plus {
  margin-left: 1rem;
}
#minus,
#plus {
  padding: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 42%);
  border-radius: 3px 3px 3px 3px;
}
#add {
  margin-bottom: 1rem;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 42%);
  font-weight: 600;
  color: #616469;
  justify-content: space-between;
  display: flex;
  text-align: left;
  font-size: 1.3rem;
}
.btn-secondary {
  background-color: #fc5859;
  border: none;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
#data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}
h4{
  font-weight: 600;
}
</style>