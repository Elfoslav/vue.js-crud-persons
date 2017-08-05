<template>
  <div>
    <h1>Persons (<router-link to="/persons/add">Add new</router-link>)</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="!loading && persons.length === 0">No data.</p>
    <p v-for="person of persons">
      <router-link :to="{ name: 'Person', params: { id: person.id } }" exact>{{person.name}} {{person.surname}}, {{person.age}}</router-link>
      (<router-link :to="{ name: 'PersonEdit', params: { id: person.id } }">Edit</router-link>)
      (<delete-person-btn :id="person.id"></delete-person-btn>)
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import App from '@/App'
import DeletePersonBtn from './partials/DeletePersonBtn'

export default Vue.extend({
  name: 'persons',
  components: {
    'delete-person-btn': DeletePersonBtn
  },
  data: function () {
    return {
      loading: true,
      persons: []
    }
  },
  watch: {
    '$route.query.q': function (q) {
      this.getPersons(this.$route.query.q)
    }
  },
  created: function () {
    this.getPersons(this.$route.query.q)
  },
  beforeRouteLeave: function (to, from, next) {
    if (from.name === 'PersonsSearch') {
      // empty search input
      document.getElementById('search-persons-input').value = ''
    }
    next()
  },
  methods: {
    getPersons: function (searchQuery) {
      this.loading = true
      let url = App.personsApiURL
      if (searchQuery) {
        url += '?q=' + searchQuery
      }
      Vue.http.get(url).then((response) => {
        this.loading = false
        this.persons = response.body
      }, (error) => {
        console.log(error)
      })
    }
  }
})
</script>
