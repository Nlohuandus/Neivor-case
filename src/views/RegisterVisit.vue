<template>
  <div class="RegisterVisit">
    <NavBar :header="header" :previousStep="undefined"/>
    <div>
      <h1>Registrar una nueva visita</h1>
    </div>
    <div>
      <img width="200rem" src="../assets/couple.png" alt="couple img" />
    </div>
    <div v-if="button1 === 'Favoritos'">
      <b-button block variant="primary" to="/favorites">{{ button1 }}</b-button>
      <b-button block variant="primary" to="/newVisitOwner">{{ button2 }}</b-button>
    </div>
    <div v-else>
      <b-button block variant="primary" to="/scancode">{{ button1 }}</b-button>
      <b-button block variant="primary" to="/newvisitvigilant">{{ button2 }}</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
export default {
  name: "RegisterVisit",
  data(){
    return{
      header:"Registrar visita"
    }
  },
  props: {
    button1: String,
    button2: String,
  },
  components:{
    NavBar
  }
};
</script>