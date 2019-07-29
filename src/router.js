import Vue from 'vue'
import Router from 'vue-router'
import People from './views/People.vue'
import Planets from './views/Planets.vue'
import Films from './views/Films.vue'
import Species from './views/Species.vue'
import Vehicles from './views/Vehicles.vue'
import Starships from './views/Starships.vue'

import People_detail from './views/People_detail.vue'
import Films_detail from './views/Films_detail.vue'
import Species_detail from './views/Species_detail.vue'
import Vehicles_detail from './views/Vehicles_detail.vue'
import Planets_detail from './views/Planets_detail.vue'
import Starships_detail from './views/Starships_detail.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/people',
      name: 'people',
      component: People
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets
    },
     {
       path: '/films',
       name: 'films',
       component: Films
     },
      {
        path: '/species',
        name: 'species',
        component: Species
      },
       {
         path: '/vehicles',
         name: 'vehicles',
         component: Vehicles
       },
        {
          path: '/starships',
          name: 'starships',
          component: Starships
        },
    

        {
          path: '/planets_detail/:url',
          name: 'planets_detail',
          component: Planets_detail
        },
        {
          path: '/films_detail/:url',
          name: 'films_detail',
          component: Films_detail
        },
        {
          path: '/species_detail/:url',
          name: 'species_detail',
          component: Species_detail
        },
        {
          path: '/vehicles_detail/:url',
          name: 'vehicles_detail',
          component: Vehicles_detail
        },
        {
          path: '/starships_detail/:url',
          name: 'starships_detail',
          component: Starships_detail
        },
         {
           path: '/people_detail/:url',
           name: 'people_detail',
           component: People_detail
         },


  ]
})