<template>
  <div id="Profile">
    <NavBar :header="header" />
    <div id="textContainer">
      <h4 id="name">Pablo Villa</h4>
      <p id="dni">DNI<br />999 999 999</p>
    </div>
    <div id="dateContainer">
      <label id="dateLabel" for="date"> Dia de la visita</label
      ><b-form-datepicker id="date" placeholder="Hoy"> </b-form-datepicker>
    </div>
    <div id="selectContainer">
      <label for="visitType">Tipo de visita</label>
      <b-form-input
        autocomplete="off"
        list="visitType"
        placeholder="Social"
      ></b-form-input>
      <datalist id="visitType">
        <option>Social</option>
      </datalist>
    </div>
    <div id="switchContainer" class="switch">
      <div id="vehiculoContainer">
        <label for="vehiculo">Vehiculo</label>
        <b-form-checkbox id="vehiculo" switch size="lg" />
      </div>
      <div id="acompañanteContainer">
        <label for="acompañante">Acompañante</label>
        <b-form-checkbox id="acompañante" size="lg" switch />
      </div>
    </div>
    <div id="buttons">
      <b-button id="favorite" class="whiteButton" block variant="white"
        >Quitar de favoritos <b-icon id="star" icon="star-fill"
      /></b-button>
      <b-button class="redButton" id="listo" block to="/success">Listo</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Profile",
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
#textContainer {
  margin-top: 2rem;
}
#name {
  font-weight: 600;
}
#dni {
  font-weight: 400;
}
#dateContainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
label {
  margin-bottom: -0.1rem;
  font-size: 0.8rem;
}
#switchcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#vehiculoContainer,
#acompañanteContainer {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
label[for="vehiculo"],
label[for="acompañante"] {
  font-size: 1.3rem;
}
#favorite {
  margin-bottom: 1rem;
  font-weight: 600;
}
.b-form-btn-label-control.form-control {
  flex-direction: row-reverse;
}
</style>