<template>

    <div class="presentation" id="presentation">
        <!-- card, permet de prendre les mêmes propriétés qu'une carte -->
        <div class="card card-terrasse">
            <div class="card-image card-img-terrasse">
                <figure class="image image-terrasse-decouvrir">
                    <img class="img-figure" src="../../public/Images/terrasse.jpg" alt="Terrasse Angelùzzo">
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    <p><span class="first-letter">U</span>n concept qui allie restauration rapide et fait maison pour une clientèle diverse et variée, vous pourrez savourer nos délicieuses pâtes, pizzas ou lasagnees parmis une sélection de plats présents sur notre nouvelle carte.<p/>
                    <p><span class="first-letter">L</span>a qualité privilégiée, nous sommes là pour vous servir avec plaisir.</p>
                </div>
            </div>
        </div>
        <div class="card card-plats">
            <div class="card-image">
                <!-- v-lazy propriété vuetify -->
                <!-- permet d'afficher les éléments voulu seulement lorsque l'utilisateur scroll vers une zone définie -->
                <v-lazy v-model="isActive" :options="{ threshold: 1.0 }" transition="slide-x-transition">
                <figure class="image image-plats"> 
                    <img src="../../public/Images/tortellinis.jpg" alt="Tortellinis Angelùzzo">
                    <img src="../../public/Images/salade.jpg" alt="Salade Angelùzzo">
                </figure>
                </v-lazy>
            </div>
            <div class="card-content">
                <div class="content">
                    <p><span class="first-letter">U</span>ne cuisine de produits frais choisis parmis les meilleurs et travaillés pour votre plus grand plaisir.<p/>
                    <p><span class="first-letter">T</span>out le soin et l'amour de notre cuisine jusque sur votre table à des prix Angelùzzo.</p>
                </div>
            </div>
        </div>
                    
    </div>
</template>

<script>

export default {
  name: 'Presentation',
  props: {
    
  },
  
  data () {
    return {
        isActive: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/presentation.css";


</style>