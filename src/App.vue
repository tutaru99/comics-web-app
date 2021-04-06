<template>
  <div>
    <v-app>
      <Navigation />
      <v-main class="bg">
    <router-view></router-view>
      </v-main>
      <VueFooter />
    </v-app>
  </div>
</template>

<script>
import VueFooter from "./components/VueFooter.vue";

import Navigation from "./components/Navigation.vue";

export default {
  name: "App",

  components: {
    VueFooter,

    Navigation,
  },
};
</script>

<style>
.whitetxt {
  color: #fff;
}
.v-sheet.v-footer:not(.v-sheet--outlined){
    z-index: 999 !important;
}
.loader {
  position: absolute;
  left: 48%;
  top: 250px;
}
.bg{
  background-color: #1E1E1E;
}
</style>