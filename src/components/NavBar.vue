<template>
  <nav id="navBar" class="navbar navbar-expand-lg">
    <div id="container" class="container-fluid" v-if="previousStep === undefined">
      <b-icon id="arrow" v-on:click="back" class="h1 mb-2" icon="arrow-left-short" />
      <p id="header" class="navbar-brand">{{ header }}</p>
    </div>
    <div id="container" class="container-fluid" v-else>
      <b-icon id="arrow" v-on:click="previousStep" class="h1 mb-2" icon="arrow-left-short" />
      <p id="header" class="navbar-brand">{{ header }}</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    header: String,
    previousStep: Function
  },
  methods:{
    back: function (e){
      e.preventDefault()
      window.history.back()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navBar {
  background: #ff7172;
  font-family: 'Jost', sans-serif;
  font-weight:500;
  color: #ffffff;
  display: flex;
  box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.479);
}

#container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
#header{
  margin-left: 1rem;
}
.h1{
  font-size: 3.5rem;
}
.h1:hover{
  cursor: pointer;
}
.navbar-brand{
  font-size: 1.5rem;
  margin-top: 0.2rem;

}
</style>
