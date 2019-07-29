<template>
  <div>
    <div v-if="load">
      <br>
      <hr />
      <div class="tableName">
        <h1 style="color:rgb(38, 212, 189);text-shadow: 3px 2px 1px rgb(91, 94, 94);">{{people.name}} <hr class=" style-seven"> </h1>
     

        

      

        <!-- Planets Start  -->
        <div
          class="divColor"
          v-if="people.rotation_period"
        >{{'rotation_period = '+ people.rotation_period}}</div>
        <div
          class="colorLabel1"
          v-if="people.population"
        >{{'orbital_period = '+ people.orbital_period}}</div>
        <div class="divColor" v-if="people.population">{{'diameter = '+ people.diameter}}</div>
        <div class="colorLabel1" v-if="people.population">{{'climate = '+ people.climate}}</div>
        <div class="divColor" v-if="people.population">{{'gravity = '+ people.gravity}}</div>
        <div class="colorLabel1" v-if="people.population">{{'terrain = '+ people.terrain}}</div>
        <div class="divColor" v-if="people.population">{{'surface_water = '+ people.surface_water}}</div>
        <div class="colorLabel1" v-if="people.population">{{'population = '+ people.population}}</div>
        
        <div
          class="divColor"
          v-if="people.population"
          v-bind:key="item"
          v-for="item in people.residents"
        >
          <br /> Residents :
          <router-link class="routerlink" :to="{ name:'people_detail' , params : {url:item} }" > Show Residents </router-link>
        </div>
        <div
          class="colorLabel1"
          v-if="people.population"
          v-bind:key="item"
          v-for="item in people.films"
        >
          <br /> Films :
         <router-link class="routerlink" :to="{ name:'films_detail' , params : {url:item} }" > Show Films </router-link>
        </div>
        <div class="divColor" v-if="people.population">{{'created = '+ people.created}}</div>
        <div class="colorLabel1" v-if="people.population">{{'edited = '+ people.edited}}</div>

        <!-- Planets End  -->

      </div>
    </div>

    <hr />
  </div>
</template>


<script>
import axios from "axios";
import PlanetsVue from "./Planets.vue";

export default {
  data() {
    return {
      people: [],
      planets: [],
      load: false
    };
  },
  created() {
    let _self = this;
    axios.get(this.$route.params.url).then(response => {
      _self.people = response.data;
      _self.load = true;
    });
  }
};
</script>








<style>
.tableName {
  margin-left: 200px;
}



.divColor {
  color: white;
}
</style>






