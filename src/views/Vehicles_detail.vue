<template>
  <div>
    <div v-if="load">
      <br>
      <hr />
      <div class="tableName">
        <h1 style="color:rgb(38, 212, 189);text-shadow: 3px 2px 1px rgb(91, 94, 94);">{{people.name}} <hr class=" style-seven"> </h1>
     

        

      

        <!-- Vehicles Start  -->
        <div class="colorLabel1" v-if="people.vehicle_class">{{'model = '+ people.model}}</div>
        <div class="divColor" v-if="people.vehicle_class">{{'manufacturer = '+ people.manufacturer}}</div>
        <div
          class="colorLabel1"
          v-if="people.vehicle_class"
        >{{'cost_in_credits = '+ people.cost_in_credits}}</div>
        <div class="divColor" v-if="people.vehicle_class">{{'length = '+ people.length}}</div>
        <div
          class="colorLabel1"
          v-if="people.vehicle_class"
        >{{'max_atmosphering_speed = '+ people.max_atmosphering_speed}}</div>
        <div class="divColor" v-if="people.vehicle_class">{{'crew = '+ people.crew}}</div>
        <div class="colorLabel1" v-if="people.vehicle_class">{{'passengers = '+ people.passengers}}</div>
        <div
          class="divColor"
          v-if="people.vehicle_class"
        >{{'cargo_capacity = '+ people.cargo_capacity}}</div>
        <div
          class="colorLabel1"
          v-if="people.vehicle_class"
        >{{'consumables = '+ people.consumables}}</div>
        <div
          class="divColor"
          v-if="people.vehicle_class"
        >{{'vehicle_class = '+ people.vehicle_class}}</div>
        <div
          class="colorLabel1"
          v-if="people.vehicle_class"
          v-bind:key="item"
          v-for="item in people.pilots"
        >Pilots :<router-link class="routerlink" :to="{ name:'vehicles_detail' , params : {url:item} }" > Show People </router-link></div>
        <div
          class="divColor"
          v-if="people.vehicle_class"
          v-bind:key="item"
          v-for="item in people.films"
        >Films :<router-link class="routerlink" :to="{ name:'species_detail' , params : {url:item} }" > Show Films </router-link></div>
        <div class="colorLabel1" v-if="people.vehicle_class">{{'created = '+ people.created}}</div>
        <div class="divColor" v-if="people.vehicle_class">{{'edited = '+ people.edited}}</div>

        <!-- Vehicles End  -->

     
      </div>
    </div>

    <hr />
  </div>
</template>


<script>
import axios from "axios";
import PlanetsVue from "./Planets.vue";
import { METHODS } from 'http';

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

.colorLabel1 {
  color: rgb(108, 221, 55);
}

.divColor {
  color: white;
}
</style>






