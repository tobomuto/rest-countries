<template>
  <div class="home">
    <div class="bars">
      <SearchBar
        @input="inputSearch"
      />
      <FilterBar
        @filterRegion='filterRegion'
      />
    </div>

    <Loader
      v-if="loadingStatus"
      class="loader"
    />

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
import Loader from '@/components/Loader.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    FilterBar,
    CountryCard,
    Loader
  },
  data: () => {
    return {
      search: "",
      selectedRegion: "All"
    }
  },
  mounted() {
      this.$store.dispatch('loadCountries') // dispatch loading
  },
  computed: {
    filteredCountries() {
      if (this.selectedRegion === 'All') {
        return this.$store.state.countries.filter((country) => {

          return this.$store.state.countries && country.name.toLowerCase().match(this.search);
        })
        
      } else {
        return this.$store.state.countries.filter((country) => {
          return country.region.match(this.selectedRegion) && country.name.toLowerCase().match(this.search);
        });
      }
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    }
  },
  methods: {
    inputSearch(search) {
      let searchToLowerString = search.toLowerCase();
      this.search = searchToLowerString
    },
    filterRegion(region) {
      this.selectedRegion = region;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 30px 5%;
  .bars {
    margin-bottom: 30px;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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