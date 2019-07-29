<template>
  <div>
    <div v-if="load">
      <br>
      <hr />
      <div class="tableName">
        <h1 style="color:rgb(38, 212, 189);text-shadow: 3px 2px 1px rgb(91, 94, 94);">{{people.name}}  </h1>
     

        

      
        <!-- Films Start  -->
        <div class="divColor" v-if="people.opening_crawl">
          <h1 style="color:rgb(38, 212, 189)">{{people.title}} <hr class=" style-seven"></h1>
        </div>

        <div class="colorLabel1" v-if="people.opening_crawl">{{'episode_id = '+ people.episode_id}}</div>
        <div class="divColor" v-if="people.opening_crawl">{{'director = '+ people.director}}</div>
        <div class="colorLabel1" v-if="people.opening_crawl">{{'producer = '+ people.producer}}</div>
        <div class="divColor" v-if="people.opening_crawl">{{'release_date = '+ people.release_date}}</div>
     <div class="colorLabel1" v-if="people.opening_crawl" v-bind:key="item" v-for="item in people.planets"> Planets : <router-link class="routerlink" :to="{ name:'planets_detail' , params : {url:item} }" > Show Planets </router-link></div> 
        <div class="divColor" v-if="people.opening_crawl">
          <br />
          {{'created = '+ people.created}}
        </div>
        <div class="colorLabel1" v-if="people.opening_crawl">
          <br />
          {{'edited = '+ people.edited}}
        </div>

        <!-- Films End  -->

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






