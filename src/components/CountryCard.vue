<template>
  <div 
    class="country"
    :class="{'dark-theme-element' : isDarkMode }"
    @click="goToCountry"
  >
    <img :src="country.flag" :alt="flagAlt">
    <div class="country__infos">
      <h4 class="country__name">{{ country.name }}</h4>
      <h6 class="country__population">Population: <span>{{ country.population }}</span></h6>
      <h6 class="country__region">Region: <span>{{ country.region }}</span></h6>
      <h6 class="country__capital">Capital: <span>{{ country.capital }}</span></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: ['country'],
  methods: {
    goToCountry() {
      this.$router.push('/country/' + this.country.alpha3Code)
    }
  },
  computed: {
    flagAlt() {
      return this.country.name + "'s flag"
    },
    isDarkMode() {
      return this.$store.state.darkMode;
    }
  }
}
</script>

<style lang="scss" scoped>

.country {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.1);
  img {
    border-radius: 8px 8px 0 0;
  }
  .country__infos {
    padding: 3rem 3rem 5rem 3rem;
    .country__name {
      font-family: $font800;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    h6 {
      margin: 0;
      font-family: $font600;
      span {
        font-family: $font300;
      }
    }
  }

}

</style>