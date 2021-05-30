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
        <img id="image" src="../assets/couple.png" alt="couple img" />
      </div>
      <div id="buttons" v-if="button1 === 'Favoritos'">
        <b-button id="button" block variant="white" to="/favorites"><div><b-icon id="star" icon="star-fill"/>{{
          button1
        }}</div><b-icon id="chevron" icon="chevron-right"/></b-button>
        <b-button id="button" block variant="white" to="/newVisitOwner"><div><b-icon id="icon" icon="person-plus"/>{{
          button2
        }}</div><b-icon id="chevron" icon="chevron-right"/></b-button>
      </div>
      <div id="buttons" v-else>
        <b-button id="button" block variant="white" to="/hascode"><div><b-img id="star" src="../assets/QR.svg"/>{{
          button1
        }}</div><b-icon id="chevron" icon="chevron-right"/></b-button>
        <b-button id="button" block variant="white" to="/nocode"><div><b-icon id="icon" icon="person-plus"/>{{
          button2
        }}</div><b-icon id="chevron" icon="chevron-right"/></b-button>
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
h1 {
  margin-top: 2rem;
  margin-bottom: 1rem ;
  font-size: 2rem;
  color: #4b4f54;
  text-align: center;
  margin-left: 0.2rem;
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
  height: 15vh;
  display: flex;
  flex-direction: column;
}
#buttons {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 5vh;
}
#button {
  margin-left: 1rem;
  width: 90vw;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 42%);
  font-weight: 600;
  color: #616469;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
#image{
  width: 75vw;
}
#icon, #star{
  margin-right: 1.5vh;
}
#chevron, #icon{
  color:black
}
#star{
  color: #f4b223;
}

</style>