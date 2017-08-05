<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{error}}</p>
    <div v-if="!loading && !error">
      <h1>
        {{person.name}} {{person.surname}}
        (<router-link :to="'/persons/edit/' + person.id">Edit</router-link>)
        (<delete-person-btn :id="person.id"></delete-person-btn>)
      </h1>
      <p>{{person.age}} years old</p>
    </div>
    <p><router-link to="/persons">&larr; All persons</router-link></p>
  </div>
</template>

<script>
import Vue from 'vue'
import App from '@/App'
import DeletePersonBtn from './partials/DeletePersonBtn'

export default Vue.extend({
  components: {
    'delete-person-btn': DeletePersonBtn
  },
  data: function () {
    return {
      loading: true,
      error: '',
      person: {}
    }
  },
  created: function () {
    this.getPerson()
  },
  methods: {
    getPerson: function () {
      let id = this.$route.params.id
      Vue.http.get(App.personsApiURL + '/' + id).then((response) => {
        this.loading = false
        let error = response.body.error
        if (error) {
          this.error = error
        } else {
          this.person = response.body
        }
      }, (error) => {
        console.log(error)
      })
    }
  }
})
</script>
