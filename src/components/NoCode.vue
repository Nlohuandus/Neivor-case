<template>
  <div v-if="index === 0">
    <VisitData :nextStep="nextStep" :progress="10" />
  </div>
  <div v-else-if="index === 1">
    <VisitVehicle
      :nextStep="nextStep"
      :previousStep="previousStep"
      :progress="60"
    />
  </div>
  <div v-else-if="index === 2">
    <Smile :nextStep="nextStep" :previousStep="previousStep" :progress="70" />
  </div>
  <div v-else-if="index === 3">
    <Resume :nextStep="nextStep" :previousStep="previousStep" :progress="90" />
  </div>
  <div v-else-if="index === 4">
    <Success :nextStep="nextStep" :previousStep="previousStep" />
  </div>
</template>

<script>
import VisitData from "../views/VisitData";
import VisitVehicle from "../views/VisitVehicle";
import Smile from "../views/Smile.vue";
import Resume from "../views/Resume.vue";
import Success from "../views/Success.vue";
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export default {
  name: "NewVisitOwner",
  data() {
    return {
      index: 0,
    };
  },
  components: {
    VisitData,
    VisitVehicle,
    Smile,
    Resume,
    Success,
  },
  methods: {
    //move index for conditional rendering
    nextStep: function () {
      this.index++;
    },
    previousStep: function () {
      this.index === 0
        ? this.$router.push("/")
        : this.index === 4
        ? this.$router.push("/")
        : this.index--;
    },
  },
};
</script>

<style>
</style>