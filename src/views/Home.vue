<template>
  <div class="home">
    <div class="bars">
      <SearchBar/>
      <FilterBar/>
    </div>
    <div class="countrys-grid">
      <CountryCard
        class="country-card"
        v-for="country, index in countries"
        :key=index
        :country=country
      />
    </div>

  </div>
</template>

<script>

import SearchBar from '@/components/SearchBar.vue'
import FilterBar from '@/components/FilterBar.vue'
import CountryCard from '@/components/CountryCard.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    FilterBar,
    CountryCard
  },
  data () {
    return {
    }
  },
  mounted() {
      this.$store.dispatch('loadCountries') // dispatch loading
  },
  computed: {
    countries() {
      console.log(this.$store.state.countries)
      return this.$store.state.countries;
    },
  }
}
</script>

<style lang="scss" scoped>
.bars {
  margin-bottom: 30px;
}
.countrys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 250px));
  gap: 30px;
  padding: 0 5%;
  justify-content: center;
}

@media screen and (min-width:640px) {

}

</style>