<template>
  <div id="searchBar" :class="{'dark-theme-element' : isDarkMode }">
    <ion-icon name="search"></ion-icon>
    <input 
      type="text" 
      placeholder="Search for a country..."
      v-model="search"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: () => {
    return {
      searchValue: ''
    }
  },
  computed: {
    search: {
      get() {
        return this.searchValue;
      },
      set(updated) {
        this.$emit("input", updated);
      }
    },
    isDarkMode() {
      return this.$store.state.darkMode;
    }
  }
}
</script>

<style lang="scss" scoped>

#searchBar {
  box-sizing: border-box;
  box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.1);
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 6px;
  padding: 0 20px;
  margin-bottom: 4rem;
  ion-icon {
    font-size: 2rem;
    color: $lightInput;
  }
  input {
    flex: 1;
    background: none;
    border: 0;
    outline: 0;
    border-radius: 6px;
    padding: 2rem;
    color: $lightInput;
    font-family: $font600;
  }
}

.dark-theme-element {
  ion-icon {
    color: white !important;
  }
  input {
    color: white !important;
  }
}

@media screen and (min-width:640px) {

#searchBar {
  width: 40%;
  margin-bottom: 0;
}

}

</style>