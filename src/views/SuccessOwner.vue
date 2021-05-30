<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div id="text">
      <h2>!Pablo ya esta listo!</h2>
      <p>
        Necesitara este codigo para poder <br />
        ingresar al condominio, recuerda enviarlo
      </p>
    </div>
    <div id="code">
      <b-img width="200rem" src="../assets/QR.svg" alt="QR Code" />
    </div>
    <div id="icons">
      <b-img id="icon" width="35rem" src="../assets/whatsapp.svg" />
      <b-img id="icon" width="35rem" src="../assets/download.svg" />
      <b-img id="icon" width="35rem" src="../assets/email.svg" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      header: "Registrar visita",
    };
  },
  components: {
    NavBar,
  },
  props: {
    previousStep: Function,
  },
};
</script>

<style scoped>
#text,
#code {
  margin-left: 1.5rem;
  margin-top: 2rem;
  margin-right: 1.5rem;
  font-family: "Jost", sans-serif;
}
h2,
p {
  text-align: center;
}
h2 {
  font-weight: 500;
}
#code {
  display: flex;
  justify-content: center;
  align-items: center;
}
#icons {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon {
  margin: 0.5rem;
}
</style>