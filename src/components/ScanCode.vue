<template>
<div>
  <div v-if="index === 0">
    <ScanCode :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 1">
    <Smile :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 2">
    <Resume :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 3">
    <Success :nextStep="nextStep" :previousStep="previousStep" />
  </div>
  <div v-else-if="index === 4">
    <SuccessOwner :previousStep="previousStep" />
  </div>
  </div>
</template>

<script>
import ScanCode from "../views/ScanCode";
import Smile from "../views/Smile";
import Resume from "../views/Resume";
import Success from "../views/Success";
import VueRouter from "vue-router";
import Vue from "vue";
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
    ScanCode,
    Smile,
    Resume,
    Success,
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