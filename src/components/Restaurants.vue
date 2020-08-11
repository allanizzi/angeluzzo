<template>

    <div class="restaurants" id="restaurants">
        <div class="filter-black">
            <h1 class="title title-restaurants"><hr class="hr-title hr-restaurants01"/>Nos Restaurants<hr class="hr-title hr-restaurants02"/></h1>

            <h2 class="title-selection">Sélectionnez une adresse pour plus de détails</h2>


            <v-container class="grid-restaurants grey lighten-5">
                <v-row>
                    <v-col class="col-restaurant restaurant-nancy ord1" tag="a" href="/home/restaurant-nancy-centre" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelNancy/>  
                    </v-col>

                    <v-col class="col-restaurant restaurant-kinepolis ord2" tag="a" href="/home/restaurant-kinepolis-nancy" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelKinepolisNancy/>      
                    </v-col>

                    <v-col class="col-restaurant restaurant-metz ord3" tag="a" href="/home/restaurant-metz" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelMetz/>      
                    </v-col>

                    <v-col class="col-restaurant restaurant-thionville ord4" tag="a" href="/home/restaurant-thionville" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelThionville/>    
                    </v-col>

                </v-row>
            </v-container>

            <div class="text-fin-restaurants">
                <hr class="hr-text-fin hr-fin01"/>
                <p class="p-text"> 7 jours sur 7 de 11h00 à 23h00.<br/>
                Nous sommes là pour vous servir !</p>
                <hr class="hr-text-fin hr-fin02"/>
            </div>

        </div>
    </div>
</template>

<script>
import LogoAngelNancy from "./LogoAngelNancy.vue";
import LogoAngelKinepolisNancy from "./LogoAngelKinepolis.vue";
import LogoAngelMetz from "./LogoAngelMetz.vue";
import LogoAngelThionville from "./LogoAngelThionville.vue";


export default {
  name: 'Restaurants',
  props: {
    
  },

  components: {
      LogoAngelNancy,
      LogoAngelKinepolisNancy,
      LogoAngelMetz,
      LogoAngelThionville
  },
  
  data () {
    return {
        open: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/restaurants.css";
@import "../../public/style/css/villeRestaurant.css";


</style>