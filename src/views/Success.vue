<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div id="text">
      <h1>¡Listo!</h1>
      <p>Ya puedes ingresar al condominio</p>
    </div>
    <div id="check">
      <b-img width="200rem" src="../assets/check.svg" />
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
#check {
  display: flex;
  justify-content: center;
  align-items: center;
}
#text,
#check {
  margin-left: 1rem;
  margin-right: 1rem;
}
#text {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
h1,
p {
  text-align: center;
}
</style>