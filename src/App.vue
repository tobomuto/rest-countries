<template>
  <div class="app" :class="{'dark-theme' : isDarkMode }">
  <Navbar
    @darkModeSwitched="darkModeSwitched"
  />
  <router-view :key="$route.fullPath"/>
</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
  components: {Navbar},
  data() {
    return {
      darkMode: false
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.state.darkMode;
    }
  },
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

.app {
  display: flex;
  flex-direction: column;

  font-family: $font300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $fontLight;
  background-color: $lightBg;
  min-height: 100vh;
  transition: all .3s;
    button {
      cursor: pointer;
      font-family: $font300;
      background-color: white;
      min-height: 30px;
      border: none;
      border-radius: 4px;
      -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
      box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
    }
} 

.dark-theme {
  background-color: $darkBg !important;
  color: white;
  button {
    background-color: $darkElements !important;
    color: white !important;
  }
}

.dark-theme-element {
  background-color: $darkElements !important;
  color: white;
}
</style>
