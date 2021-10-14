<template>
  <nav-bar />
  <router-view />
  <footer-bar />
</template>


<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  components: {
    NavBar,
    FooterBar,
  },
};
</script>


<style>
* {
  font-family: Montserrat;
  transition: all 1s;
  overflow-x: hidden;
}
.home {
  position: relative;
  top: 70px;
}
</style>
