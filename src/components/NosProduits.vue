<template>

    <div class="nosProduits" id="nosProduits">
        <div class="produits filter-black">
            <h1 class="title title-produits"><hr class="hr-title hr-produits01"/>Nos Produits<hr class="hr-title hr-produits02"/></h1>

            <div class="div-text-produits">
                <p class="text-produits01">Des produits sains pour une cuisine artisanale et authentique.</p>
                <p class="text-produits02">Vous souhaitez en savoir plus ?<br/>Venez découvrir tous les détails sur notre carte</p>
                <div class="buttons btn-div has-addons is-centered">
                  <b-button tag="a" href="/home/carte" @click="open = false" class="button btn-carte">La Carte <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z"/></svg>
                  </b-button>
                </div>
            </div>
            <div class="div-video">
              <figure class="image figure-angel">
                <iframe class="video-angel" alt="Vidéo Angelùzzo" width="560" height="315" src="https://www.youtube.com/embed/XN1yxSn919I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
              </figure>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NosProduits',
  props: {
    
  },
  
  data () {
    return {
      animated: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/nosProduits.css";


</style>