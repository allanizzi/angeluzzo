<template>

    <div class="restaurantThionville restaurantVille" id="restaurantThionville">
        <div class="filter-black">
          <div class="animate__animated animate__fadeInRight">
            <LogoThionvilleDetails/>  

            <div class="coordonneesRestaurant">
                <div class="noms-restaurants">
                  <p class="angeluzzo-title">Angelùzzo</p>
                  <p class="ville-restaurant">Thionville Centre</p>
                </div>

              <div class="contact">
                <p class="numero-angel"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" fill="#98792C"/></svg><a href="tel:0383357416">03 87 54 76 76</a></p>
                <p class="adresse-angel">20 Place Grommerch<br/>57100 Thionville</p>
              </div>

            </div>

            <div class="map-restaurant">
              <figure>
                <iframe id="carte-angel" class="carte-angel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.6807753574567!2d6.16523991573444!3d49.35819027933957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479524d6046e69bf%3A0x6f93105b17f4b0df!2s20%20Place%20Anne%20Grommerch%2C%2057100%20Thionville!5e0!3m2!1sfr!2sfr!4v1596112355930!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <v-skeleton-loader
                  class="skeleton-map"
                  id="skeleton-map"
                  type="image"
                  tile
                  :loading="true"
                  v-if="isLoading"
                ></v-skeleton-loader>
              </figure>
            </div>

            <div class="autre-restaurant">
              <p>Trouvez un autre restaurant</p>
              <hr class="hr-autre-angel"/>
            </div>

            <v-container class="grid-restaurants grey lighten-5">
                <v-row>
                    <v-col class="col-restaurant restaurant-nancy-kinepolis ord1"  tag="a" href="/home/restaurant-kinepolis-nancy" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelKinepolis/>      
                    </v-col>

                    <v-col class="col-restaurant restaurant-nancy_centre ord3" tag="a" href="/home/restaurant-nancy-centre" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelNancy/>      
                    </v-col>

                    <v-col class="col-restaurant restaurant-metz ord2" tag="a" href="/home/restaurant-metz" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelMetz/>    
                    </v-col>

                </v-row>
            </v-container>

            <div class="buttons btn-div has-addons is-centered">
              <b-button tag="a" href="#restaurantThionville" @click="open = false" class="button btn-haut-page">Haut de page <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 10h-5l9-10 9 10h-5v10h-8v-10zm8 12h-8v2h8v-2z"/></svg>
              </b-button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import LogoThionvilleDetails from "./LogoThionvilleDetails.vue";
import LogoAngelKinepolis from "./LogoAngelKinepolis.vue";
import LogoAngelMetz from "./LogoAngelMetz.vue";
import LogoAngelNancy from "./LogoAngelNancy.vue";


export default {
  name: 'RestaurantThionville',
  props: {
    
  },

  components: {
      LogoThionvilleDetails,
      LogoAngelNancy,
      LogoAngelKinepolis,
      LogoAngelMetz
  },
  
  data () {
    return {
      open: false,
      isLoading: true

    }
  },

  created () {
      setTimeout(() => {
          this.isLoading = false;
          document.getElementById("skeleton-map").style.display = "none";
          document.getElementById("carte-angel").style.display = "block";
      }, 5 * 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/villeRestaurantDetails.css";

.animate__animated.animate__fadeInRight {
  --animate-duration: 3s;
}

</style>