<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep"/>
    <div>
        <h1>¡Listo!</h1>
        <p>Ya puedes ingresar al condominio</p>
    </div>
    <div>
        <b-img id="check" src="../assets/check.svg"/>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Success",
  components: {
    NavBar,
  },
  data() {
    return {
      header: "Registrar visita",
    };
  },
};
</script>

<style scoped>
    #check{
        width: 10rem;
    }
</style>