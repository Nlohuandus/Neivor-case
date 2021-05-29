<template>
  <div id="Profile">
    <NavBar :header="header" />
    <div id="text">
      <h4>Pablo Villa</h4>
      <p>DNI <br>999 999 999</p>
    </div>
    <div>
      <label for="date"> Dia de la visita</label>
      <b-form-datepicker id="date"> </b-form-datepicker>
    </div>
    <div>
      <label for="visitType"> Tipo de visita</label>
      <b-form-input list="visitType"></b-form-input>
      <datalist id="visitType">
        <option>Social</option>
      </datalist>
    </div>
    <div id="switchs">
      <p>Vehiculo <b-form-checkbox switch></b-form-checkbox></p>
      <p>Acompañantes <b-form-checkbox switch></b-form-checkbox></p>
    </div>
    <div>
      <p>Quitar de favoritos <b-icon variant="warning" icon="star" /></p>
    </div>
    <div>
      <b-button block variant="danger" to="/successful">Listo</b-button>
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
      header: "Favoritos",
    };
  },
};
</script>

<style>
#text{
  margin-top: 2rem;
  margin-left: 0.5rem;
}
</style>