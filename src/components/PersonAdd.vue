<template>
  <div>
    <h1>Create person</h1>
    <person-form :person="{}"></person-form>
  </div>
</template>

<script>
import Vue from 'vue'
import PersonForm from './partials/PersonForm'
Vue.component('person-form', PersonForm)

export default Vue.extend({
  components: {
    'person-form': PersonForm
  },
  name: 'personAdd'
})
</script>
