<template>
  <nav id="navbar" :class="{'dark-theme-element' : isDarkMode }">
    <span class="navbar__brand-name">Where in the world?</span>
    <div 
      class="navbar__dark-mode"
      @click="darkModeSwitch"
    >
      <ion-icon name="moon" v-if="isDarkMode"></ion-icon>
      <ion-icon name="moon-outline" v-else></ion-icon> 
      <span>Dark Mode</span> 
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isDarkMode() {
      return this.$store.state.darkMode;
    }
  },
  methods: {
    darkModeSwitch() {
      this.$store.dispatch('toggleDarkMode')
    }
  }
}
</script>

<style scoped lang="scss">

#navbar {
  display: flex;
  justify-content: space-between;
  padding: 30px 5%;
  box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.1);
  background-color: white;
  transition: all .3s;
  .navbar__brand-name {
    font-family: $font800;
    font-size: 14px;
  }
  .navbar__dark-mode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    cursor: pointer;
    font-family: $font600;
  }
}

.dark-theme {
  background-color: $darkBg !important;
  color: white;
}

</style>
