<template>
  <div class="home">
    <div class="bars">
      <SearchBar/>
      <FilterBar
        @filterRegion='filterRegion'
      />
    </div>
    <div class="countrys-grid">
      <CountryCard
        class="country-card"
        v-for="country, index in filteredCountries"
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
      selectedRegion: 'All'
    }
  },
  mounted() {
      this.$store.dispatch('loadCountries') // dispatch loading
  },
  computed: {
    filteredCountries() {
      if (this.selectedRegion === 'All') {
        return this.$store.state.countries;
      } else {
        return this.$store.state.countries.filter((country) => {
          return country.region.match(this.selectedRegion);
        });
      }
    }
  },
  methods: {
    filterRegion(region) {
      this.selectedRegion = region;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10% 5%;
  .bars {
    margin-bottom: 30px;
  }
  .countrys-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 250px));
    gap: 30px;
    justify-content: center;
  }
}

@media screen and (min-width:640px) {
.bars {
  display: flex;
  justify-content: space-between;
}
}

</style>