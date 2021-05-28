<template>
  <div class="SelectProfile">
    <NavBar :header="header"/>
    <div>
      <h1>Pantalla solo para elegir perfil, solo para desarrolladores</h1>
    </div>
    <div>
      <b-button to="/registerowner" block variant="primary">Propietario</b-button>
      <b-button block variant="primary" to="/registervigilant">Vigilante</b-button>
      <b-button block variant="primary">Self check-in</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
export default {
  name: "SelectProfile",
  components:{
    NavBar
  },
  data(){
    return{
      header: "Elegir perfil"
    }
  }
};
</script>

<style>
</style>