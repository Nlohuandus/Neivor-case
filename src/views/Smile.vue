<template>
  <div>
    <NavBar :header="header" :previousStep="previousStep" />
    <div>
      <div>
        <b-progress id="progressBar" :value="progress" variant="danger" />
      </div>
      <h2>Ultimo paso, sonrie</h2>
    </div>
    <div id="image">
      <b-img width="225rem" src="../assets/someGuy.png" />
    </div>
    <div id="buttons">
      <div id="siguiente">
      <b-button block v-on:click="nextStep">Siguiente</b-button>
      </div>
      <div>
      <b-button id="omitir" block variant="white">Omitir</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
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
};
</script>

<style scoped>
h2,
#buttons,
#image {
  margin-left: 1rem;
  margin-right: 1rem;
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
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
}
.progress {
  overflow: visible;
  margin-bottom: 1rem;
}
#omitir {
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 42%);
}
#siguiente{
  margin-bottom: 1rem;
}
</style>