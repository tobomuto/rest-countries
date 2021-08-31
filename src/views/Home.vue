<template>
  <div class="home">
    <div class="bars">
      <SearchBar/>
      <FilterBar/>
    </div>
    <CountryCard
      v-for="country, index in countries"
      :key=index
      :country=country
    />
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

</style>