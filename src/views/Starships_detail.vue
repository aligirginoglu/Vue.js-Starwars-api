<template>
  <div>
    <div v-if="load">
      <br>
      <hr />
      <div class="tableName">
        <h1 style="color:rgb(38, 212, 189);text-shadow: 3px 2px 1px rgb(91, 94, 94);  ">{{people.name}} <hr class=" style-seven"> </h1>
     

        


        <!-- Starships Start  -->
        <div class="colorLabel1" v-if="people.MGLT">{{'model = '+ people.model}}</div>
        <div class="divColor" v-if="people.MGLT">{{'manufacturer = '+ people.manufacturer}}</div>
        <div class="colorLabel1" v-if="people.MGLT">{{'cost_in_credits = '+ people.cost_in_credits}}</div>
        <div class="divColor" v-if="people.MGLT">{{'length = '+ people.length}}</div>
        <div
          class="colorLabel1"
          v-if="people.MGLT"
        >{{'max_atmosphering_speed = '+ people.max_atmosphering_speed}}</div>
        <div class="divColor" v-if="people.MGLT">{{'crew = '+ people.crew}}</div>
        <div class="colorLabel1" v-if="people.MGLT">{{'passengers = '+ people.passengers}}</div>
        <div class="divColor" v-if="people.MGLT">{{'cargo_capacity = '+ people.cargo_capacity}}</div>
        <div class="colorLabel1" v-if="people.MGLT">{{'consumables = '+ people.consumables}}</div>
        <div
          class="divColor"
          v-if="people.MGLT"
        >{{'hyperdrive_rating = '+ people.hyperdrive_rating}}</div>
        <div class="colorLabel1" v-if="people.MGLT">{{'MGLT = '+ people.MGLT}}</div>
        <div class="divColor" v-if="people.MGLT">{{'starship_class = '+ people.starship_class}}</div>
        <div
          class="colorLabel1"
          v-if="people.MGLT"
          v-bind:key="item"
          v-for="item in people.pilots"
        >Pilots :<router-link class="routerlink" :to="{ name:'starships_detail' , params : {url:item} }" > Show People </router-link></div>
        <div
          class="divColor"
          v-if="people.MGLT"
          v-bind:key="item"
          v-for="item in people.films"
        >Films :<router-link class="routerlink" :to="{ name:'films_detail' , params : {url:item} }" > Show Films  </router-link></div>
        <div class="colorLabel1" v-if="people.MGLT">{{'created = '+ people.created}}</div>
        <div class="divColor" v-if="people.MGLT">{{'edited = '+ people.edited}}</div>

        <!-- Starships End  -->
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

.colorLabel1 {
  color: rgb(108, 221, 55);
}

.divColor {
  color: white;
}
</style>






