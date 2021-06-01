<template>
  <div class="SelectProfile">
    <NavBar :header="header" />
    <div id="container">
      <div id="title">
        <h1>
          Pantalla solo para <br />
          elegir perfil, solo <br />
          para desarrolladores
        </h1>
      </div>
      <div id="buttons">
        <b-button id="button" class="whiteButton" to="/registerowner" block variant="white">
          <div><b-icon scale="1.5" id="person" icon="person" />Propietario</div>
          <b-icon scale="1.5" id="chevron" icon="chevron-right"
        /></b-button>
        <b-button id="button" class="whiteButton" block variant="white" to="/registervigilant">
          <div><b-icon scale="1.5" id="person" icon="person" />Vigilante</div>
          <b-icon scale="1.5" id="chevron" icon="chevron-right"
        /></b-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "SelectProfile",
  components: {
    NavBar,
  },
  data() {
    return {
      header: "Elegir perfil",
    };
  },
};
</script >

<style scoped>
#buttons {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 39.9vh;
}
#button {
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-weight: 600;
  margin-top: 3rem;
  font-size: 2rem;
  color: #4b4f54;
  text-align: center;
  line-height: 0.99;
  line-break: strict;
}
#person {
  position: relative;
  margin-right: 2vh;
  color: black;
}
#chevron {
  position: relative;
  margin-left: 20vh;
  color: black;
}
</style>
