<template>

    <div class="restaurantNancyCentre restaurantVille" id="restaurantNancyCentre">
        <div class="filter-black">
          <div class="animate__animated animate__fadeInRight">
            <LogoNancyDetails/>  

            <div class="coordonneesRestaurant">
              <div class="noms-restaurants">
                <p class="angeluzzo-title">Angelùzzo</p>
                <p class="ville-restaurant">Nancy Centre</p>
              </div>

              <div class="contact">
                <p class="numero-angel"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" fill="#98792C"/></svg><a href="tel:0383357416">03 83 35 74 16</a></p>
                <p class="adresse-angel">45 rue Saint-Dizier<br/>54000 Nancy</p>
              </div>

            </div>
              <p class="info-supp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.688 5.176c0 .82-.603 1.109-1.423 1.109h-.509v-2.178h.704c.775 0 1.228.283 1.228 1.069zm4.312-1.884v6.417c0 1.265-1.026 2.291-2.292 2.291h-6.417c-1.265 0-2.291-1.026-2.291-2.292v-6.416c0-1.266 1.026-2.292 2.292-2.292h6.417c1.265 0 2.291 1.026 2.291 2.292zm-2.75 1.829c0-.759-.231-1.33-.691-1.713-.461-.383-1.134-.574-2.019-.574h-2.331v7.333h1.547v-2.609h.664c.905 0 1.603-.209 2.094-.627.49-.418.736-1.021.736-1.81zm-4.25 11.378c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.671-1.5 1.5zm-8.5.501c-.276 0-.5.223-.5.499s.224.5.5.5h7c.276 0 .5-.224.5-.5s-.224-.499-.5-.499h-7zm-4.5-.501c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.671-1.5 1.5zm-1.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.006 4.001h-1.511c.474.89.803 1.655.803 2.972 0 1.673-1.355 3.028-3.026 3.028h-11.948c-1.671 0-3.026-1.355-3.026-3.028 0-1.641.506-2.421 1.184-3.678 1.041.206 3.967.705 7.816.705.877 0 1.728-.029 2.532-.076-1.203-.217-2.227-.933-2.859-1.929-2.895-.023-5.237-.339-6.478-.55.382-.686.779-1.386 1.184-2.061.67-1.117.852-1.149 1.39-1.246 1.011-.181 1.984-.272 3.231-.302v-2.002c-1.382.031-2.451.132-3.585.335-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.411-.98 3.805 0 1.318.42 2.415 1 3.817v2.209c0 .553.448 1.002 1 1.002h1.5c.552 0 1-.449 1-1.001v-1h13v1c0 .552.448 1.001 1 1.001h1.5c.552 0 1-.449 1-1.001v-2.209c.58-1.403 1-2.499 1-3.817 0-1.109-.196-2.058-.618-3.041-.221.035-.443.068-.674.068z"/></svg>Parking Saint-Dizier à proximité</p>

            <div class="map-restaurant">
              <figure>
                <iframe id="carte-angel" class="carte-angel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.7877016244615!2d6.180730815711324!3d48.690423479271345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794986db55711f3%3A0xe7931bcc443fde63!2s45%20Rue%20Saint-Dizier%2C%2054000%20Nancy!5e0!3m2!1sfr!2sfr!4v1595960458941!5m2!1sfr!2sfr" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
                    <v-col class="col-restaurant restaurant-kinepolis ord1" tag="a" href="/home/restaurant-kinepolis-nancy" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelKinepolisNancy/>      
                    </v-col>

                    <v-col class="col-restaurant restaurant-metz ord3" tag="a" href="/home/restaurant-metz" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelMetz/>      
                    </v-col>

                    <v-col class="col-restaurant restaurant-thionville ord2" tag="a" href="/home/restaurant-thionville" @click="open = false" cols="6" md="3" sm="4">
                        <LogoAngelThionville/>    
                    </v-col>

                </v-row>
            </v-container>

            <div class="buttons btn-div has-addons is-centered">
              <b-button tag="a" href="#restaurantNancyCentre" @click="open = false" class="button btn-haut-page">Haut de page <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 10h-5l9-10 9 10h-5v10h-8v-10zm8 12h-8v2h8v-2z"/></svg>
              </b-button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import LogoNancyDetails from "./LogoNancyDetails.vue";
import LogoAngelKinepolisNancy from "./LogoAngelKinepolis.vue";
import LogoAngelMetz from "./LogoAngelMetz.vue";
import LogoAngelThionville from "./LogoAngelThionville.vue";

export default {
  name: 'RestNancyCentre',
  props: {
    
  },

  components: {
      LogoNancyDetails,
      LogoAngelKinepolisNancy,
      LogoAngelMetz,
      LogoAngelThionville
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