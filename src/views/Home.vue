<template>
  <div class="home">
    <div class="bars">
      <SearchBar/>
      <FilterBar/>
    </div>
    <CountryCard/>
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
  }
}
</script>

<style lang="scss" scoped>

</style>