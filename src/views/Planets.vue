<template>
  <table>
    <ul class="planetsBorder">
      <h3>Name</h3>
     <router-link style="font-family: italic; color : white; font-size :25px;" :to="{ name: 'planets_detail', params: {url: p.url } }"  v-bind:key="p.name" v-for="p in planets_detail"> <br> {{p.name}}   </router-link>
    <br><br></ul>

  </table>
</template>

<script>
import axios from "axios";

export default {
    data() {
    return {
      planets_detail: []
    };
  },
  created() {
    axios.get("https://swapi.co/api/planets/").then(response => {
      this.planets_detail = response.data.results;
    });
  }
};
</script>

<style scoped>
@import "./../assets/style.css.txt";
</style>


<style>
.planetsBorder {
   margin-top: -100px;
margin-left: -100px; 
  color: rgb(212, 201, 201);
  text-align: center;
  font-size: 23px;
  border : ridge 20px;
 width:2000px;
      border-top-color:#557be2d3;

      border-left-color:b3c9b3ab;

      border-right-color:#b3c9b3ab;

      border-bottom-color:#557be2d3;
background-color: rgba(24, 15, 102, 0.226); 

  

}

</style>


