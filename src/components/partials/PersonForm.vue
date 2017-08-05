<template>
  <div class="ui four column centered grid">
    <div class="column">
      <form v-on:submit.prevent="submitForm" :class="['ui', 'form', 'error' ]">
        <p v-if="error" class="text-red">{{error}}</p>
        <div :class="['field', { error: errors.has('name') }]">
          <label>First name:</label>
          <input type="text" name="name" v-model.trim="person.name" v-validate="'required'" placeholder="first name" />
          <div v-show="errors.has('name')" class="ui error message">&uarr; {{ errors.first('name') }}</div>
        </div>
        <div :class="['field', { error: errors.has('surname') }]">
          <label>Last name:</label>
          <div><input type="text" name="surname" v-model.trim="person.surname" v-validate="'required|alpha'" placeholder="last name" /></div>
          <div v-show="errors.has('surname')" class="ui error message">&uarr; {{ errors.first('surname') }}</div>
        </div>
        <div :class="['field', { error: errors.has('age') }]">
          <label>Age:</label>
          <input type="number" name="age" v-model.number.trim="person.age" v-validate="'required|numeric'" placeholder="age" />
          <div v-show="errors.has('age')" class="ui error message">&uarr; {{ errors.first('age') }}</div>
        </div>
        <input type="hidden" name="id" v-model.id="person.id" />
        <p><input type="submit" value="Submit" class="ui button" /></p>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import App from '@/App'

export default Vue.extend({
  name: 'person-form',
  props: {
    edit: false,
    error: '',
    person: {}
  },
  methods: {
    submitForm: function (e) {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          if (this.person.id) {
            // edit person
            Vue.http.put(App.personsApiURL + '/' + this.person.id, this.person).then(response => {
              let error = response.body.error
              if (error) {
                return alert(error)
              }
              this.$router.push('/persons/' + this.person.id)
            }, error => {
              this.handleError(error)
            })
          } else {
            // create new person
            console.log('creating a new person', this.person)
            Vue.http.post(App.personsApiURL, this.person).then(response => {
              let error = response.body.error
              if (error) {
                return alert(error)
              }
              let newPerson = response.body
              this.$router.push('/persons/' + newPerson.id)
            }, error => {
              this.handleError(error)
            })
          }
        }
      })
    },
    handleError: function (error) {
      this.error = error.body
      console.log(error)
    }
  }
})
</script>
