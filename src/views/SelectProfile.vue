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
          <div><b-icon id="person" icon="person" />Propietario</div>
          <b-icon id="chevron" icon="chevron-right"
        /></b-button>
        <b-button id="button" class="whiteButton" block variant="white" to="/registervigilant">
          <div><b-icon id="person" icon="person" />Vigilante</div>
          <b-icon id="chevron" icon="chevron-right"
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
  top: 45vh;
}
#button {
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 42%);
  font-family: "Jost", sans-serif;
  font-weight: 600;
  color: #616469;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
h1 {
  font-weight: 600;
  margin-top: 3rem;
  font-size: 2rem;
  color: #4b4f54;
  text-align: center;
  margin-left: 0.2rem;
  line-height: 0.9;
  line-break: strict;
}
#person {
  position: relative;
  margin-right: 1vh;
  color: black;
}
#chevron {
  position: relative;
  margin-left: 20vh;
  color: black;
}
</style>
