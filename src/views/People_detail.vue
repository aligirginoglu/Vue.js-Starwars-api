<template>
  <div>
    <div v-if="load">
      <br>
      <hr />
      <div class="tableName">
        <h1 style="color:rgb(38, 212, 189);text-shadow: 3px 2px 1px rgb(91, 94, 94);">{{people.name}} <hr class=" style-seven">  </h1>
     

        

        <!-- People Start  -->

        <div class="divColor" v-if="people.height">{{'Height = '+ people.height}}</div>
        <div v-if="people.height" class="colorLabel1">{{'Mass: ' + people.mass}}</div>
        <div class="divColor" v-if="people.height">{{'hair_color :'+people.hair_color}}</div>
        <div v-if="people.height" class="colorLabel1">skin_color : {{people.skin_color}}</div>
        <div class="divColor" v-if="people.height">eye_color : {{people.eye_color}}</div>
        <div v-if="people.height" class="colorLabel1">birth_year : {{people.birth_year}}</div>
        <div class="divColor" v-if="people.height">gender : {{people.gender}}</div>
        <div v-if="people.height" class="colorLabel1">Homeworld :  <router-link class="routerlink" :to="{ name:'planets_detail' , params : {url:people.homeworld} }" > Show Homeworld  </router-link>  </div>         
        <div class="divColor" v-if="people.height" v-bind:key="item" v-for="item in people.films">
          <br />Films :
       <router-link class="routerlink" :to="{ name:'films_detail' , params : {url:item} }" > Show Films  </router-link>      
        </div>
        <div
          v-if="people.height"
          class="colorLabel1"
          v-bind:key="item"
          v-for="item in people.species"
        >
        Species :<router-link class="routerlink" :to="{ name:'species_detail' , params : {url:item} }"  > Show Species </router-link>
        </div>
        <div
          class="divColor"
          v-if="people.height"
          v-bind:key="item"
          v-for="item in people.vehicles"
        >Vehicles :<router-link class="routerlink" :to="{ name:'vehicles_detail' , params : {url:item} }" > Show Vehicles  </router-link></div>
        <div
          v-if="people.height"
          class="colorLabel1"
          v-bind:key="item"
          v-for="item in people.starships"
        >Starhips :<router-link class="routerlink" :to="{ name:'starships_detail' , params : {url:item} }" > Show Starhips  </router-link></div>
        <div class="divColor" v-if="people.height">created : {{people.created}}</div>
        <div v-if="people.height" class="colorLabel1">edited : {{people.edited}}</div>

        <!-- People End  -->

    
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
  color: rgb(38, 212, 189);
  
}
.colorLassbel1 {
  color: rgb(91, 94, 94);
  
}

.divColor {
  color: white;
}

.style-seven {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: rgb(248, 248, 248);
    border-width: 1px 0 0 0;
    border-radius: 20px;
}
.style-seven:before { /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: rgb(252, 252, 252);
    border-width: 0 0 1px 0;
    border-radius: 20px;
}
.routerlink {
color: rgb(223, 56, 56);

}
.routerlink:hover {
color: rgb(233, 117, 10);

}
</style>






