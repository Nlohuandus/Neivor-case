<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div id="text">
      <h2>!{{ getName() }} ya esta listo!</h2>
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
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
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
  methods: {
    getName: function () {
      if (this.$route.fullPath === "/success") {
        return "Pablo";
      } else {
        return "Carlos";
      }
    },
  },
};
</script>

<style scoped>
#text,
#code {
  margin-top: 2rem;
}
h2,
p {
  text-align: center;
}
h2 {
  font-weight: 600;
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