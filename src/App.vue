<template>
  <div id="app" class="ui container">
    <img height="120" src="./assets/logo.png">
    <nav class="ui pointing menu stackable">
      <router-link to="/" class="item" active-class="active" exact>Home</router-link>
      <router-link to="/persons" class="item" active-class="active" exact>Persons</router-link>
      <div class="right menu">
        <div class="item">
          <search-persons-form></search-persons-form>
        </div>
      </div>
    </nav>
    <div class="ui segment">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import SearchPersonsForm from '@/components/partials/SearchPersonsForm'

export default {
  name: 'app',
  personsApiURL: 'https://nameless-waterfall-9048.getsandbox.com/users',
  components: {
    'search-persons-form': SearchPersonsForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
