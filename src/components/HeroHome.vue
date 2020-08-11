<template>
    
<!-- Section hero pour que cela prenne la page entière de l'appareil grâce à is-fullheight -->
  <section class="hero is-fullheight hero-home" id="home">
    
    <!-- Pas besoin de hero-header pour cette page, un hero-body suffit -->
    <div class="hero-body">

      <!-- Container, fils direct d'une section ou d'un hero -->
      <div class="container contenu-hero animate__animated animate__fadeInUp">
        <!-- figure, utilisé pour manipuler des images ou vidéos -->
        <figure class="image logoPngHome">
          <img src="../../public/Images/logo-angeluzzo-2.png">
          <figcaption class="title-angeluzzo-home">ANGELÙZZO</figcaption><figcaption class="title-restaurant-home">RESTAURANT</figcaption>
        </figure>  

        <div class="description-angel01">
          <p>Angelùzzo restaurant vous accueille dans un cadre original et convivial.</p>
        </div>

        <div class="description-angel02">
          <p>7 jours sur 7 de 11h00 à 23h00.<br/>
          Brasserie de 15h00 à 18h00.</p>
        </div>

        <div class="logos-reseaux">
          <img class="logo-insta" src="../../public/Images/logo-insta.png">
          <img class="logo-facebook" src="../../public/Images/logo-facebook.png">
        </div>        
        
        <div class='icon-scroll'></div>
        <div class='icon-scroll02'></div>
      </div>

      <a href="#home">
      <v-btn class="mx-2 btn-haut-page" fab dark large>
          <v-icon dark>mdi-arrow-up</v-icon>
      </v-btn>
      </a>

    </div>
    
  </section>

</template>

<script>

export default {
  name: 'HeroHome',

  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/homePage.css";

.animate__animated.animate__fadeInUp {
  --animate-duration: 3s;
}

</style>