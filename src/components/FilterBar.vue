<template>
  <div 
    id="filterBar"
    :class="{'dark-theme-element' : isDarkMode }"
    @click="showSelectBox"
  >
    <span class="filterSelected" v-if="!selectedRegion">Filter by Region</span>
    <span class="filterSelected" v-else >{{selectedRegion}}</span>
    <ion-icon name="chevron-down-outline"></ion-icon>
    <div 
      class="filterBox" @click.stop
      :class="{'dark-theme-element' : isDarkMode }"
    >
      <div class="selectBox">
        <span @click="selectRegion('All')">All</span>
        <span @click="selectRegion('Africa')">Africa</span>
        <span @click="selectRegion('America')">America</span>
        <span @click="selectRegion('Asia')">Asia</span>
        <span @click="selectRegion('Europe')">Europe</span>
        <span @click="selectRegion('Oceania')">Oceania</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  data() {
    return {
      selectedRegion: ''
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.state.darkMode;
    }
  },
  methods: {
    showSelectBox() {
      const filterBox = document.querySelector(".filterBox")
      filterBox.classList.toggle("show");
    },
    selectRegion(region) {
      this.selectedRegion = region;
      this.$emit('filterRegion', region)
      const filterBox = document.querySelector(".filterBox")
      filterBox.classList.remove("show");
    }
  }
}
</script>

<style lang="scss" scoped>

#filterBar {
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.1);
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 6px;
  padding: 2rem;
  font-family: $font600;
  cursor: pointer;
  .filterBox {
    position: absolute;
    width: 100%;
    top: 110%;
    left: 0;
    max-height: 0rem;
    overflow: hidden;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.1);
    transition: all .3s;
    .selectBox {
      display: flex;
      flex-direction: column;
      padding: 2rem;
    }
  }
  .show {
    max-height: 20rem !important;
  }
}

@media screen and (min-width:640px) {
  #filterBar {
    width: 30%;
    margin-bottom: 0;
  }
}
</style>