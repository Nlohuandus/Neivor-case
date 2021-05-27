<template>
  <div id="app">
    <div id="nav">
      <NavBar :header="header"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default ({
  name: "app",
  components:{
    NavBar,
  },
  data(){
    return{
      header: "Elegir perfil"
    }
  }
})
</script>

<style>


</style>
