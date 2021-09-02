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
    button {
      font-family: $font300;
      background-color: white;
      min-height: 30px;
      border: none;
      border-radius: 4px;
      -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
      box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
    }
}
</style>
