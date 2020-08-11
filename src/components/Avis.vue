<template>

    <div class="avis" id="avis">
        <div class="lesAvis">

            <div class="div-carousel-avis">
            <!-- carousel buefy -->
              <!-- 
                v-ripple: propriété vuetify permettant une animation au clic de souris
                arrow: fleches de navigation
                arrow-both: les deux fleches de navigation
                arrow-hover: les fleches apparaissent au survol de la souris
                icon-pack: pack d'icones
                icon-prev: icon de la navigation précédente
                icon-next: icon de a navigation suivante
                autoplay: changera automatiquement de slides
                interval: définit l'interval entre deux changements
                animated: slide ou fade
                icon-size: taille des icones
               -->
                <b-carousel
                v-ripple
                    :arrow="arrow"
                    :arrow-both="arrowBoth"
                    :arrow-hover="arrowHover"
                    :icon-pack="iconPack"
                    :icon-prev="iconPrev"
                    :icon-next="iconNext"
                    :autoplay="true"
                    :interval="7500"
                    :animated="anim"
                    :icon-size="iconSize"
                    class="carousel01">
                    <b-carousel-item>
                        <!-- carte vuetify
                        flat: sans ombres à la carte -->
                        <v-card
                        class="carte-avis"
                        :flat="true"
                        >
                            <v-card-title>
                                <span class="title title-avis">Ce qu'ils disent de nous :</span>
                            </v-card-title>
                            
                            <v-card-subtitle class="mt-1">
                                <span class="title title-commentaire">Parfait</span>
                            </v-card-subtitle>
                            
                            <v-card-text class="mt-3 text-avis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg> 
                                Première fois dans ce restaurant et c'était parfait,accueil souriant (malgré le masque) et chaleureux ,cuisine impeccable et délicieuse,service très bon et excellent rapport qualité prix
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
                            </v-card-text>  
                            
                            <v-card-text class="date-avis"><span>- Juillet 2020</span></v-card-text>
                        </v-card>
                    </b-carousel-item>

                    <b-carousel-item>
                        <v-card
                        class="carte-avis"
                        :flat="true"
                        >
                            <v-card-title>
                                <span class="title title-avis">Ce qu'ils disent de nous :</span>
                            </v-card-title>
                            
                            <v-card-subtitle class="mt-1">
                                <span class="title title-commentaire">Bon rapport qualité/prix</span>
                            </v-card-subtitle>
                            
                            <v-card-text class="mt-3 text-avis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg> 
                                Bon rapport qualité/prix. Simple et efficace. Recommandable pour le déjeuner. Terrasse sympa. Bon service.
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
                            </v-card-text>  
                            
                            <v-card-text class="date-avis"><span>- Juillet 2020</span></v-card-text>
                        </v-card>
                    </b-carousel-item>

                    <b-carousel-item>
                        <v-card
                        class="carte-avis"
                        :flat="true"
                        >
                            <v-card-title>
                                <span class="title title-avis">Ce qu'ils disent de nous :</span>
                            </v-card-title>
                            
                            <v-card-subtitle class="mt-1">
                                <span class="title title-commentaire">Très satisfaite</span>
                            </v-card-subtitle>
                            
                            <v-card-text class="mt-3 text-avis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg> 
                                Le personnel est très sympathique, les plats sont délicieux et servi rapidement. Je trouve les prix corrects.
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
                            </v-card-text>  
                            
                            <v-card-text class="date-avis"><span>- Juillet 2020</span></v-card-text>
                        </v-card>
                    </b-carousel-item>

                    <b-carousel-item>
                        <v-card
                        class="carte-avis"
                        :flat="true"
                        >
                            <v-card-title>
                                <span class="title title-avis">Ce qu'ils disent de nous :</span>
                            </v-card-title>
                            
                            <v-card-subtitle class="mt-1">
                                <span class="title title-commentaire">Manger au restaurant</span>
                            </v-card-subtitle>
                            
                            <v-card-text class="mt-3 text-avis">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg> 
                                Des l'entrée accueille des plus agréables, personnel super. Super cuisine. Nous reviendrons très bientôt.
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
                            </v-card-text>  
                            
                            <v-card-text class="date-avis"><span>- Février 2020</span></v-card-text>
                        </v-card>
                    </b-carousel-item>
                    
                </b-carousel>    
            </div>

            
        </div>
    </div>
</template>

<script>

export default {
  name: 'Avis',
  props: {
    
  },

  components: {

  },
  
  data () {
    return {
        arrow: true,
        arrowBoth: true,
        arrowHover: false,
        iconPack: 'mdi',
        anim: 'slide',
        iconPrev: 'chevron-left',
        iconNext: 'chevron-right',
        iconSize: 'is-medium'
    }
  },

  created () {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/avis.css";


</style>