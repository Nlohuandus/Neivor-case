<template>
  <div>
    <div>
      <div><b-progress id="progressBar" :value="[50]" variant="danger" /></div>
      <h1>Algunos datos más</h1>
    </div>
    <div>
      <p>
        Visita de varios dias
        <b-form-checkbox
          v-model="isChecked"
          value="1"
          unchecked-value="0"
          switch
        ></b-form-checkbox>
      </p>
      <div v-if="isChecked === '1'">
        <label for="start">Dia de inicio</label>
        <b-datepicker id="start" />
        <label for="end">Dia de de fin</label>
        <b-datepicker id="end" />
      </div>
      <div v-else>
        <label for="day">Dia de visita</label>
        <b-datepicker id="day" />
      </div>
      <div>
        <label for="visitType"> Tipo de visita</label>
        <b-form-input list="visitType"></b-form-input>
        <datalist id="visitType">
          <option>Social</option>
        </datalist>
      </div>
      <div>
        <p>¿Viene en coche?<b-form-checkbox switch/></p>
      </div>
    </div>

    <div>
      <b-button block variant="primary" to="/visitvehicle">Siguiente</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitType",
  data() {
    return {
      isChecked: "0",
    };
  },
};
</script>

<style>
#progressBar {
  overflow: visible;
}
</style>