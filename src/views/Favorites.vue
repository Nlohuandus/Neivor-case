<template>
  <div>
    <NavBar :header="header" />
    <div id="inputContainer">
      <b-form-input id="input" placeholder="🔍" v-model="text" />
    </div>
    <div id="link" v-for="n in 5" :key="n" class="mt-4">
      <router-link to="/profile">
        <b-card
          img-src="../assets/favoritePerson.jpg"
          img-alt="Profile pic"
          img-left
          img-width="70rem"
          img-height="70rem"
          class="mb-3"
        >
          <div id="textContainer">
            <h4 id="name">Pablo Villa</h4>
            <p id="dni">DNI 999 999 999</p>
          </div>
          <b-icon scale="3" id="chevron" icon="chevron-right" />
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
#inputContainer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#input {
  width: 62vh;
  border: solid rgb(177, 177, 177) 1px;
}
#link {
  margin-left: 1rem;
  width: 90vw;
  height: 13vh;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 25%);
  font-family: "Jost", sans-serif;
  text-decoration: none;
}
.card {
  height: 13vh;
  border: none;
}
.card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.mt-4 {
  border-radius: 5px 5px 5px;
}
#name {
  font-weight: 500;
}
#name,
#dni {
  color: #515459;
}
</style>