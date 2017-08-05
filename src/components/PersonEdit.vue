<template>
  <div>
    <h1>Edit person</h1>
    <person-form :edit="true" :person="person"></person-form>
  </div>
</template>

<script>
import Vue from 'vue'
import PersonForm from './partials/PersonForm'
import App from '@/App'
Vue.component('person-form', PersonForm)

export default Vue.extend({
  name: 'personEdit',
  components: {
    'person-form': PersonForm
  },
  created: function () {
    let id = this.$route.params.id
    Vue.http.get(App.personsApiURL + '/' + id).then(response => {
      let error = response.body.error
      if (error) {
        return alert(error)
      }
      this.person = response.body
    }, error => {
      console.log(error)
    })
  },
  data: function () {
    return {
      person: {}
    }
  }
})
</script>
