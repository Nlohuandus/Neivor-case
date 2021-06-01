<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div>
        <b-progress id="progressBar" :value="progress" />
      </div>
      <h2>Último paso, sonríe</h2>
    </div>
    <div id="image">
      <b-img width="225rem" src="../assets/someGuy.png" />
    </div>
    <!-- conditional to reuse code, based in the current url -->
    <div v-if="isNoCode()" id="buttons">
        <b-button id="noCode" block v-on:click="nextStep">Siguiente</b-button>
    </div>
    <div v-else id="buttons">
        <b-button block v-on:click="nextStep">Siguiente</b-button>
        <b-button id="omitir" class="whiteButton" block variant="white"
          >Omitir</b-button
        >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import NavBar from "../components/NavBar.vue";
Vue.use(VueRouter);
export default {
  name: "Smile",
  components: {
    NavBar,
  },
  data() {
    return {
      header: "Registrar visita",
    };
  },
  props: {
    previousStep: Function,
    nextStep: Function,
    progress: Number,
  },
  methods: {
    isNoCode: function () {
      if (this.$route.fullPath === "/nocode") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}
#noCode{
  position: relative;
  top: 3.6rem;
}
#image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.btn-secondary {
  background-color: #fc5859;
  border: none;
  font-weight: 500;
  font-size: 1.3rem;
}
#omitir {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.3rem;
}
#siguiente {
  margin-bottom: 1rem;
}
#siguienteIf {
  position: relative;
  top: 3.8rem;
}
#buttons {
  position: relative;
  top: 1rem;
}
</style>