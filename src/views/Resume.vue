<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
      <div>
          <div>
          <h1>Carlos Villa</h1>
          <p>DNI</p>
          <p>999 999 999</p>
          </div>
          <b-img id="image" src="../assets/someGuy.png"/>
      </div>
      <div>
      <b-img id="carmini" src="../assets/car.svg" />
      <div>
        <p>Matricula</p>
        <p>999 999 999</p>
      </div>
      <div><p>Acompañantes<b-checkbox switch /></p></div>
    </div>
    <div>
      <b-button block variant="primary" v-on:click="nextStep">Listo</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
export default {
    name:"Resume",
    components:{
        NavBar
    },
    props:{
        nextStep:Function,
        previousStep: Function
    }

}
</script>

<style scoped>
    #image{
        width: 5rem;
    }
    #carmini {
  width: 5rem;
  background: #3bbfad;
  border-radius: 8px 8px 8px 8px;
}
</style>