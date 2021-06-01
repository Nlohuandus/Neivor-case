<template>
  <div v-if="index === 0">
    <VisitData :nextStep="nextStep" :progress="10" />
  </div>
  <div v-else-if="index === 1">
    <VisitType
      :nextStep="nextStep"
      :previousStep="previousStep"
      :progress="50"
    />
  </div>
  <div v-else-if="index === 2">
    <VisitVehicle
      :nextStep="nextStep"
      :previousStep="previousStep"
      :progress="70"
    />
  </div>
  <div v-else-if="index === 3">
    <VisitResume
      :nextStep="nextStep"
      :previousStep="previousStep"
      :progress="90"
      :backToZero="backToZero"
    />
  </div>
  <div v-else-if="index === 4">
    <SuccessOwner :previousStep="previousStep" />
  </div>
</template>

<script>
import VisitData from "../views/VisitData";
import VisitType from "../views/VisitType";
import VisitVehicle from "../views/VisitVehicle";
import VisitResume from "../views/VisitResume";
import SuccessOwner from "../views/SuccessOwner.vue";
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
    VisitType,
    VisitVehicle,
    VisitResume,
    SuccessOwner,
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
    backToZero: function (){
      this.index = 0
    }
  },
};
</script>

<style>
</style>