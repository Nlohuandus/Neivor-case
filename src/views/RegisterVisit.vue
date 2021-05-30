<template>
  <div class="RegisterVisit">
    <NavBar :header="header" :previousStep="undefined" />
    <div id="container">
      <div id="tile">
        <h1>
          Registrar una nueva<br />
          visita
        </h1>
      </div>
      <div id="couple">
        <b-img id="image" width="250rem" src="../assets/couple.png" alt="couple img" />
      </div>
      <!-- conditional rendering based in received props -->
      <div id="buttons" v-if="button1 === 'Favoritos'">
        <b-button
          class="whiteButton"
          id="button"
          block
          variant="white"
          to="/favorites"
          ><div><b-icon id="star" icon="star-fill" />{{ button1 }}</div>
          <b-icon id="chevron" icon="chevron-right"
        /></b-button>
        <b-button
          class="whiteButton"
          id="button"
          block
          variant="white"
          to="/newVisitOwner"
          ><div><b-icon id="icon" icon="person-plus" />{{ button2 }}</div>
          <b-icon id="chevron" icon="chevron-right"
        /></b-button>
      </div>
      <div id="buttons" v-else>
        <b-button
          class="whiteButton"
          id="button"
          block
          variant="white"
          to="/hascode"
          ><div><b-img id="star" src="../assets/QR.svg" />{{ button1 }}</div>
          <b-icon id="chevron" icon="chevron-right"
        /></b-button>
        <b-button
          class="whiteButton"
          id="button"
          block
          variant="white"
          to="/nocode"
          ><div><b-icon id="icon" icon="person-plus" />{{ button2 }}</div>
          <b-icon id="chevron" icon="chevron-right"
        /></b-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "RegisterVisit",
  data() {
    return {
      header: "Registrar visita",
    };
  },
  props: {
    button1: String,
    button2: String,
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#button:hover{
  color: #515459;
}
h1 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 0.9;
  line-break: strict;
  font-weight: 600;
}
#couple {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#container {
  display: flex;
  flex-direction: column;
}
#buttons {
  position: relative;
  top: 10vh;
}
#button {
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
#icon,
#star {
  margin-right: 1.5vh;
}
#chevron,
#icon {
  color: black;
}
#star {
  color: #f4b223;
}
</style>