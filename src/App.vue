<template>

  <Navbar/>
  <router-view :key="$route.fullPath"/>

</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
  components: {Navbar}
}

</script>

<style lang="scss">

@font-face {
  font-family: "nunito-extraBold";
  src: url("./assets/fonts/NunitoSans-ExtraBold.ttf") format("truetype");
}

@font-face {
  font-family: "nunito-light";
  src: url("./assets/fonts/NunitoSans-Light.ttf") format("truetype");
}

@font-face {
  font-family: "nunito-semiBold";
  src: url("./assets/fonts/NunitoSans-SemiBold.ttf") format("truetype");
}

html {
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;

  font-family: $font300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $fontLight;
  background-color: $lightBg;
  min-height: 100vh;
}
</style>
