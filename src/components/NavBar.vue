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

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50px;
}
.h1{
  font-size: 3.5rem;
  margin-left: -1rem;
}
.h1:hover{
  cursor: pointer;
}
.navbar-brand{
  font-size: 1.5rem;
  margin-top: 0.2rem;
}
</style>
