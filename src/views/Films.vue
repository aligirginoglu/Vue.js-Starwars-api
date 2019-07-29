<template>
  <table>
    <ul class="filmBorder">
      <h3>Title</h3>
      <router-link style="font-family: italic; color : white; font-size :25px;" :to="{ name: 'films_detail', params: {url: p.url } }"  v-bind:key="p.title" v-for="p in films_detail"> <br> {{p.title}}   </router-link>
      <br><br>
    </ul>

  </table>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
      films_detail: []
    };
  },
  created() {
    axios.get("https://swapi.co/api/films/").then(response => {
      this.films_detail = response.data.results;
    });
  }
};
</script>

<style scoped>
@import "./../assets/style.css.txt";
</style>


<style>
.filmBorder {
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



