<template>
  <div>
    <NavBar :header="header" />
    <div>
      <b-form-input v-model="text" />
    </div>
    <div id="link" v-for="n in 5" :key="n" class="mt-4">
      <router-link to="/profile">
        <h4 id="name">Pablo Villa</h4>
        <b-card
          img-src="../assets/favoritePerson.jpg"
          img-alt="Profile pic"
          img-left
          img-width="120rem"
          class="mb-3"
        >
          <b-card-text id="dni">
            DNI 999 999 999
            <b-icon id="arrow" icon="chevron-right" />
          </b-card-text>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      text: "",
      header: "Favoritos",
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
a {
  color: black;
}
</style>