<template>
  <div class="RegisterVisit">
    <div>
      <h1>Registrar una nueva visita</h1>
    </div>
    <div>
      <img src="../assets/couple.png" alt="" />
    </div>
    <div>
      <b-button block to="/favorites" variant="primary">Favoritos</b-button>
      <b-button block variant="primary" to="/visitinfo">Nuevo visitante</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterVisit",
};
</script>