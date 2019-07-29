<template>
  <div>
    <div v-if="load">
      <br>
      <hr />
      <div class="tableName">
        <h1 style="color:rgb(38, 212, 189);text-shadow: 3px 2px 1px rgb(91, 94, 94);">{{people.name}} <hr class=" style-seven"> </h1>
     

        


        <!-- Species Start  -->
        <div
          class="colorLabel1"
          v-if="people.classification"
        >{{'classification = '+ people.classification}}</div>
        <div class="divColor" v-if="people.classification">{{'designation = '+ people.designation}}</div>
        <div
          class="colorLabel1"
          v-if="people.classification"
        >{{'average_height = '+ people.average_height}}</div>
        <div class="divColor" v-if="people.classification">{{'skin_colors = '+ people.skin_colors}}</div>
        <div
          class="colorLabel1"
          v-if="people.classification"
        >{{'hair_colors = '+ people.hair_colors}}</div>
        <div class="divColor" v-if="people.classification">{{'eye_colors = '+ people.eye_colors}}</div>
        <div
          class="colorLabel1"
          v-if="people.classification"
        >{{'average_lifespan = '+ people.average_lifespan}}</div>
        <div class="divColor" v-if="people.classification">Homeworld : <router-link class="routerlink" :to="{ name:'planets_detail' , params : {url:people.homeworld} }" > Show Planets  </router-link></div>
        <div class="colorLabel1" v-if="people.classification">{{'language = '+ people.language}}</div>
        <div
          class="divColor"
          v-if="people.classification"
          v-bind:key="item"
          v-for="item in people.people"
        >People :<router-link class="routerlink" :to="{ name:'people_detail' , params : {url:item} }" > Show People </router-link></div>
        <div
          class="colorLabel1"
          v-if="people.classification"
          v-bind:key="item"
          v-for="item in people.films"
        >Films :<router-link class="routerlink" :to="{ name:'films_detail' , params : {url:item} }" > Show Films  </router-link></div>
        <div class="divColor" v-if="people.classification">{{'created = '+ people.created}}</div>
        <div class="colorLabel1" v-if="people.classification">{{'edited = '+ people.edited}}</div>

        <!-- Species End  -->

     
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
  color: rgb(38, 212, 189);
}



.divColor {
  color: white;
}
</style>






