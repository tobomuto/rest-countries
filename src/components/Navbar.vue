<template>
  <nav id="navbar">
    <span class="navbar__brand-name">Where in the world?</span>
    <button class="navbar__dark-mode">Dark Mode</button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

#navbar {
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
  background-color: white;
  .navbar__brand-name {
    font-family: $font800;
    font-size: 14px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
