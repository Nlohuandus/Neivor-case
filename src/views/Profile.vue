<template>
  <div id="Profile">
    <div id="text">
      <h6>Pablo Villa</h6>
      <p>DNI</p>
      <p>999 999 999</p>
    </div>
    <div>
      <label for="date"> Dia de la visita</label>
      <b-form-datepicker id="date"> </b-form-datepicker>
      </div>
      <div>
        <label for="visitType"> Tipo de visita</label>
        <b-form-input list="my-list-id"></b-form-input>
        <datalist id="my-list-id">
          <option>Social</option>
        </datalist>
      </div>
      <div id="switchs">
        <p>Vehiculo <b-form-checkbox switch></b-form-checkbox></p>
        <p>Acompañantes <b-form-checkbox switch></b-form-checkbox></p>
      </div>
      <div>
        <p>Quitar de favoritos <b-icon variant="warning" icon="star"/></p>
      </div>
      <div>
              <b-button block variant="danger">Listo</b-button>

      </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style>
</style>