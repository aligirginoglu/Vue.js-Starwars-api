<template>
  <div>
    <router-view></router-view>

    <div class="all">
      <div class="lefter" >
          <router-link style="color:black" to="/people"> <img style="margin-top:-20px" src="https://image.flaticon.com/icons/svg/86/86483.svg"/>  </router-link> <pre style="font-size:30px; margin-top:-10px; color:white;">  PEOPLE&emsp14;&emsp;&emsp14;&emsp14; &emsp14;&emsp;&emsp;&emsp13;PLANETS&emsp14;&emsp;&emsp;&emsp13;&emsp14;&emsp14;&emsp14;&emsp14;FILMS&emsp14;&emsp;&emsp;&emsp14;&emsp14;&emsp14;&emsp13;SPECIES&emsp14;&emsp;&emsp;VEHICLES&emsp14;&emsp14;STARSHIPS</pre> 
                   
        <div class="text">
        
        </div>
      </div>

      <div class="left">
         <router-link style="color:black" to="/planets"> <img style="margin-top:-20px; height:200px " src="https://image.flaticon.com/icons/png/512/1146/1146347.png"/>  </router-link>
        <div class="text">
         
        </div>
      </div>
   
      <div class="center">
        
        
        <div class="explainer">
          
          <span>STAR WARS</span>
          
        </div>
       
        <div class="text">
           <router-link style="color:black" to="/films"><img style=" height:180px;  "  src="https://image.flaticon.com/icons/svg/206/206950.svg"/>  </router-link>   
  
        </div>
               
      </div>
    
      <div class="right">
           <router-link style="color:black" to="/species"><img style="margin-top:-25px; height:200px ; " src="https://image.flaticon.com/icons/png/512/993/993673.png"/></router-link> 
        <div class="text">
       
        </div>
      </div>
      <div class="righter">
          <router-link style="color:black" to="/vehicles"><img style="margin-top:-25px; height:200px " src="https://image.flaticon.com/icons/svg/1946/1946010.svg"/></router-link>
        <div class="text">
        
        </div>
      </div>
      <div class="order">
           <router-link style="color:black" to="/starships"><img style="margin-top:-25px; height:200px; " src="https://image.flaticon.com/icons/svg/115/115751.svg"/></router-link>
        <div class="text">
       
        </div>
      </div>
      
    </div>
   
  </div>
  
</template>


<script>
export default {
  components: {},
  name: "player",
  data() {
    return {
     
       
    };
  }
};
</script>

