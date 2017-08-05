<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Counter: {{counter}}</p>
    <p><button @click="counterIncrement()">Click o increment number</button></p>
    <p>Okay, enough, click on menu (in header) where you want to go.</p>
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
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0,
      name: 'Joe',
      surname: '',
      age: ''
    }
  },

  methods: {
    counterIncrement: function () {
      console.log('increment...', ++this.counter)
    },
    submitForm: function () {
      console.log(this.data)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
