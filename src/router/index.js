import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Persons from '@/components/Persons'
import PersonAdd from '@/components/PersonAdd'
import PersonEdit from '@/components/PersonEdit'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/persons',
      name: 'Persons',
      component: Persons
    },
    {
      path: '/persons/search',
      name: 'PersonsSearch',
      component: Persons
    },
    {
      path: '/persons/add',
      name: 'PersonAdd',
      component: PersonAdd
    },
    {
      path: '/persons/edit/:id',
      name: 'PersonEdit',
      component: PersonEdit
    },
    {
      path: '/persons/:id',
      name: 'Person',
      component: Person
    }
  ]
})
