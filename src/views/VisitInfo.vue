<template>
  <div>
    <div>
      <div><b-progress id="progressBar" :value="[10]" variant="danger" /></div>
      <h1>Datos de la visita</h1>
    </div>
    <div>
      <label for="name"> Nombre y Apellido</label>
      <b-input id="name" />
      <label for="dni"> DNI</label>
      <b-input id="dni" />
    </div>
    <div>
      <b-button block variant="primary" to="/visittype"
        >Siguiente</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitInfo",
};
</script>

<style scoped>

</style>