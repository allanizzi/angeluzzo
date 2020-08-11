<template>
<!-- Section hero pour que cela prenne la page entière de l'appareil grâce à is-fullheight -->
  <section class="hero is-fullheight hero-load">
    <!-- Pas besoin de hero-header pour cette page, un hero-body suffit -->
    <div class="hero-body">
      <!-- Container, fils direct d'une section ou d'un hero -->
      <div class="container container-load">
        <!-- figure, utilisé pour manipuler des images ou vidéos -->
        <figure class="image logoPngLoad">
          <img src="../../public/Images/logo-angeluzzo-2.png">
          <figcaption class="title-angeluzzo-load">ANGELÙZZO</figcaption><figcaption class="title-restaurant-load">RESTAURANT</figcaption>
        </figure>
        <!-- Component de vuetify, spinner de chargement lié à un timeout qui s'enlèvera à un délai donné,  pour simuler un écran de chargement -->
        <!-- is-overlay signifie par dessus l'élément -->
        <!-- indeterminate: tournera en boucle -->
        <v-progress-circular
          :size="85"
          :width="5"
          indeterminate 
          v-if="isLoading"
          class="is-overlay spinner-load"
        ></v-progress-circular>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoadingPage',
  props: {
    
  },

  data () {
    return {
      isLoading: true
    }
  },

  created () {
      setTimeout(() => {
          this.isLoading = false;
          this.$router.push({path:'/home'})
      }, 4 * 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/loadingScreen.css";

.container-load {
  animation: fadein 2.2s;
  animation-delay: 0s;

}

@keyframes fadein {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>
