<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div><b-progress id="progressBar" :value="progress" variant="danger" /></div>
      <h1>Ultimo paso, sonrie</h1>
    </div>
    <div>
      <b-img id="image" src="../assets/someGuy.png"/>
    </div>
    <div>
      <b-button block variant="primary" v-on:click="nextStep">Siguiente</b-button>
            <b-button block variant="primary" >Omitir</b-button>

    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
export default {
  name:"Smile",
  components:{
    NavBar
  },
  data(){
    return{
      header:"Registrar visita"
    }
  },
  props:{
    previousStep:Function,
    nextStep: Function,
    progress: Number
  }
};
</script>

<style scoped>
#image{
  width: 15rem;
}
</style>