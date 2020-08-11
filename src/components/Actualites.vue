<template>

    <div class="actualites" id="actualites">
        <div class="filter-black">
          <h1 class="title title-actualites"><hr class="hr-title hr-actu01"/>Actualités<hr class="hr-title hr-actu02"/></h1>
     
          <div class="div-carousel-actualites">
              <!-- carousel buefy -->
              <!-- 
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
                :arrow="arrow"
                :arrow-both="arrowBoth"
                :arrow-hover="arrowHover"
                :icon-pack="iconPack"
                :icon-prev="iconPrev"
                :icon-next="iconNext"
                :autoplay="true"
                :interval="5500"
                :animated="anim"
                :icon-size="iconSize">
                <b-carousel-item>
                    <p class="title-covid">Information COVID-19 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" fill="#d90e0e"/></svg></p>
                    <hr class="hr-covid"/>

                    <div class="infos01 div-covid">
                      <img class="image-covid-masque" src="../../public/Images/port-masque.jpg">
                      <p class="text01 text-covid">En raisons des évènements liés au COVID-19 et pour des raisons de sécurité, le port du masque est OBLIGATOIRE dans nos restaurants lors de vos déplacements.</p>
                    </div>

                    <div class="div-covid infos02">
                      <img class="image-covid-gel" src="../../public/Images/covid-gel.jpg">
                      <p class="text02 text-covid">Pour la sécurité de tous, des dispositifs de sécurité ont été installés dans nos restaurants</p>
                    </div>
                </b-carousel-item>
                <b-carousel-item>
                      <p class="title-emporter">Vente A Emporter</p>
                      <hr class="hr-emporter"/>
                      <p class="title-emporter-nouveau">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.139 2.63l3.068-1.441.786 3.297 3.39.032-.722 3.312 3.038 1.5-2.087 2.671 2.087 2.67-3.038 1.499.722 3.312-3.39.033-.786 3.296-3.068-1.441-2.139 2.63-2.138-2.63-3.068 1.441-.787-3.296-3.389-.033.722-3.312-3.039-1.499 2.088-2.67-2.088-2.671 3.039-1.5-.722-3.312 3.389-.032.787-3.297 3.068 1.441 2.138-2.63 2.139 2.63zm-3.742 2.342l-2.303-1.081-.59 2.474-2.542.024.542 2.483-2.279 1.125 1.566 2.004-1.566 2.002 2.279 1.124-.542 2.485 2.542.025.59 2.472 2.303-1.081 1.603 1.972 1.604-1.972 2.301 1.081.59-2.472 2.543-.025-.542-2.485 2.279-1.124-1.565-2.002 1.565-2.004-2.279-1.125.542-2.483-2.543-.024-.59-2.474-2.301 1.081-1.604-1.972-1.603 1.972zm1.603 9.528c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1-.947h-2v-6.553h2v6.553z"/></svg>
                        NOUVEAU 
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.139 2.63l3.068-1.441.786 3.297 3.39.032-.722 3.312 3.038 1.5-2.087 2.671 2.087 2.67-3.038 1.499.722 3.312-3.39.033-.786 3.296-3.068-1.441-2.139 2.63-2.138-2.63-3.068 1.441-.787-3.296-3.389-.033.722-3.312-3.039-1.499 2.088-2.67-2.088-2.671 3.039-1.5-.722-3.312 3.389-.032.787-3.297 3.068 1.441 2.138-2.63 2.139 2.63zm-3.742 2.342l-2.303-1.081-.59 2.474-2.542.024.542 2.483-2.279 1.125 1.566 2.004-1.566 2.002 2.279 1.124-.542 2.485 2.542.025.59 2.472 2.303-1.081 1.603 1.972 1.604-1.972 2.301 1.081.59-2.472 2.543-.025-.542-2.485 2.279-1.124-1.565-2.002 1.565-2.004-2.279-1.125.542-2.483-2.543-.024-.59-2.474-2.301 1.081-1.604-1.972-1.603 1.972zm1.603 9.528c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1-.947h-2v-6.553h2v6.553z"/></svg>
                      </p>

                      <div class="infos01 div-emporter01">
                        <img class="image-logo-angel" src="../../public/Images/logo-angeluzzo.jpg">
                        <p class="text01 text-emporter">Commandez dès maintenant votre repas à emporter parmis nos pâtes, salades, pizzas, desserts et boissons.*</p>
                      </div>

                      <div class="div-emporter-remise">
                        <p class="text-remise">10% de remise sur la note !</p>
                      </div>

                      <div class="div-emporter02">
                        <p class="text-commande text-emporter">Possibilité de commander sur place ou par téléphone.</p>
                      </div>
                        <hr class="hr-fin"/>
                      <div class="div-emporter03">
                        <p class="text-thionville">* Exclusivement pour le restaurant Angelùzzo THIONVILLE CENTRE.</p>
                      </div>
                </b-carousel-item>
            </b-carousel>    
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Actualites',
  props: {
    
  },

  components: {

  },
  
  data () {
    return {
        arrow: true,
        arrowBoth: true,
        arrowHover: true,
        iconPack: 'mdi',
        anim: 'slide',
        iconPrev: 'arrow-left',
        iconNext: 'arrow-right',
        iconSize: ''
    }
  },

  created () {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/actualites.css";


</style>