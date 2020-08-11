<template>

   <!-- Section hero pour que cela prenne la page entière de l'appareil grâce à is-fullheight -->
  <section class="hero is-fullheight hero-error errorPage" id="errorPage">
    <!-- Pas besoin de hero-header pour cette page, un hero-body suffit -->
    <div class="hero-body filter-black">
          <!-- <div class="hero-body animate__animated animate__fadeInUp"> -->

      <!-- Container, fils direct d'une section ou d'un hero -->
      <div class="container contenu-hero">
        <h1 class="title title-oups">OUPS !</h1>

        <!-- figure, utilisé pour manipuler des images ou vidéos -->
        <figure class="image logoError">
          <img src="../../public/Images/image-error.svg">
        </figure>     

        <b-progress class="loader-progress" size="is-small"></b-progress>
            
        <p class="text-error">Ne vous inquiétez pas, vous avez tapé la bonne URL, c'est la faute de votre clavier.<br/> Notre chef s'en occupe immédiatement !</p>

      </div>

    </div>
    
  </section>
</template>

<script>

export default {
  name: 'ErrorPage',
  props: {
    
  },
  
  data() {
        return {
            isLoading: true
        }
    },
     created () {
      //  au bout de 10 secondes, renvoit l'utilisateur à la page d'accueil
      setTimeout(() => {
          this.isLoading = false;
          this.$router.push({path:'/home'})
      }, 10 * 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/errorPage.css";


</style>