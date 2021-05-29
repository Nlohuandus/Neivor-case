<template>
  <div>
    <NavBar :header="header" />
    <div id="inputContainer">
      <b-form-input id="input" placeholder='🔍' v-model="text"/>
    </div>
    <div id="link" v-for="n in 5" :key="n" class="mt-4">
      <router-link to="/profile">
        <b-card
        id="card"
          img-src="../assets/favoritePerson.jpg"
          img-alt="Profile pic"
          img-left
          img-width="70rem"
          img-height="70rem"
          class="mb-3"
        >
        <div>
          <h4 id="name">Pablo Villa</h4>
          <b-card-text id="dni">
            DNI 999 999 999
          </b-card-text>
        </div>
            <b-icon id="arrow" icon="chevron-right" />
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
#inputContainer{
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#input{
  width: 65vh;
}
#link {
  margin-left: 1rem;
  width: 90vw;
  height: 13vh;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 25%);
  font-family: "Jost", sans-serif;
  font-weight: 600;
  color: #616469;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.card{
  height: 13vh;
  display: flex;
  border: none;
  align-items:center ;
}
.card-body{
  display: flex;
  flex-direction: row;
  align-items: center ;
}
.mt-4{
  border-radius: 5px 5px 5px;
}
</style>