<template>
<div id="homePageComponents" class="">
    <HeroHome/>
    <Actualites/>
    <Presentation/>
    <Produits/>
    <Avis/>
    <ADecouvrir/>
    <Equipe/>
    <Restaurants/>
</div>
</template>

<script>
import HeroHome from "./HeroHome.vue";
import Actualites from "./Actualites.vue";
import Presentation from "./Presentation.vue";
import Produits from "./NosProduits.vue";
import Avis from "./Avis.vue";
import ADecouvrir from "./ADecouvrir.vue";
import Equipe from "./Equipe.vue";
import Restaurants from "./Restaurants.vue";



export default {
  name: 'Home',
  props: {
    
  },

  components: {
    Actualites,
    HeroHome,
    Presentation,
    Produits,
    Avis,
    ADecouvrir,
    Equipe,
    Restaurants
  },
  
  data () {
    return {

    }
  },

  created () {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>