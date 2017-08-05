<template>
  <div class="ui transparent icon input">
    <input id="search-persons-input" type="text" placeholder="Search..." v-model="query" v-on:keyup="searchPersons">
    <i class="search link icon" v-on:click="searchPersons"></i>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'search-persons-form',
  data: function () {
    return {
      query: ''
    }
  },
  created: function () {
    this.query = this.$route.query.q
  },
  methods: {
    searchPersons: function (e) {
      if (this.$route.name === 'PersonsSearch') {
        // if we are on search page, just replace query
        this.$router.replace('/persons/search?q=' + this.query)
      } else {
        // otherwise push search URL & query into router
        this.$router.push('/persons/search?q=' + this.query)
      }
    }
  }
})
</script>
