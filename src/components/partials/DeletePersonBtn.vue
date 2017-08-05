<template>
  <a class="text-red" :href="'#delete?id=' + id" title="delete" v-on:click.prevent="deletePerson">X</a>
</template>

<script>
import Vue from 'vue'
import App from '@/App'

export default Vue.extend({
  name: 'persons',
  props: ['id'],
  methods: {
    deletePerson: function () {
      if (confirm('Are you sure you want to delete this person?')) {
        Vue.http.delete(App.personsApiURL + '/' + this.id).then((response) => {
          this.$router.go('/persons')
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
})
</script>
