<template>
<!-- component juste pour le logo de chaque restaurants pour la liste des restaurants angeluzzo -->
  <div class="image logoAngelRestaurantHome">
    <!-- figure, propriété bulma comprenant une image et du text -->
    <figure>
        <img src="../../public/Images/logo-angeluzzo-2.png">
        <figcaption class="title-angeluzzo">Angelùzzo</figcaption>
        <hr class="hr-restaurant"/>
        <figcaption class="title-restaurant-ville">Kinepolis Nancy</figcaption>
    </figure>

    <div class="overlay">
      <img class="icon-info" src="../../public/Images/info-circle-solid.svg">
    </div>

  </div>
</template>

<script>

export default {
  name: 'KinepolisNancyRestaurantHome',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>