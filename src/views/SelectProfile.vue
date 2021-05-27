<template>
  <div class="SelectProfile">
    <div>
      <h1>Pantalla solo para elegir perfil, solo para desarrolladores</h1>
    </div>
    <div>
      <b-button to="/register" block variant="primary">Propietario</b-button>
      <b-button block variant="primary">Vigilante</b-button>
      <b-button block variant="primary">Self check-in</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectProfile",
};
</script>

<style>
</style>