<template>
<div>
  <div v-if="index === 0">
    <VisitData :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 1">
    <VisitType :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 2">
    <VisitVehicle :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 3">
    <VisitResume :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 4">
    <SuccessOwner :previousStep="previousStep" />
  </div>
  </div>
</template>

<script>
import VisitData from "../views/VisitData";
import VisitType from "../views/VisitType";
import VisitVehicle from "../views/VisitVehicle";
import VisitResume from "../views/VisitResume";
import VueRouter from "vue-router";
import Vue from "vue";
import SuccessOwner from "../views/SuccessOwner.vue";
Vue.use(VueRouter);
export default {
  name: "NewVisitOwner",
  data() {
    return {
      index: 0,
      steps: [
        "ScanCode",
        "Smile",
        "Resume",
        "success",
      ],
    };
  },
  components: {
    VisitData,
    VisitType,
    VisitVehicle,
    VisitResume,
    SuccessOwner,
  },
  methods: {
    nextStep: function () {
      this.index++;
    },
    previousStep: function () {
      this.index === 0
        ? this.$router.push("/registerowner")
        : this.index === 4
        ? this.$router.push("/registerowner")
        : this.index--;
    },
  },
};
</script>

<style>
</style>