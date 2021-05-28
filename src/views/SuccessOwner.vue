<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep"/>
      <div>
        <h1>!Pablo ya esta listo!</h1>
        <p>Necesitara este codigo para poder ingresar al condominio, recuerda enviarlo</p>
      </div>
      <div>
        <b-img width="200rem" src="../assets/QR.svg" alt="QR Code"/>
      </div>
      <div id="icons">
        <b-img width="50rem" src="../assets/whatsapp.svg"/>
        <b-img width="25rem" src="../assets/download.svg"/>
        <b-img width="26rem" src="../assets/email.svg"/>

      </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
export default {
  data(){
    return{
      header:"Registrar visita"
    }
  },
  components:{
    NavBar
  },
  props:{
    previousStep: Function
  }

}
</script>

<style>

</style>