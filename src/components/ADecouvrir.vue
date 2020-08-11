<template>

    <div class="aDecouvrir" id="aDecouvrir"> 
    <!-- définition d'un container vuetify ainsi qu'un tableau comportant les éléments à découvrir -->
    <!-- création de plusieurs types de tableaux en fonction des dimensions de l'écran -->
        <v-container class="grid-decouvrir grey lighten-5">
            <!-- no-gutter signifie sans gouttieres -->
            <v-row no-gutters>
                <!-- élément avec la classe ord1 signifiant sa position par rapport aux autres éléments. L'attribut ord n'étant pas pris en compte.
                cols: signifiant prenant de base 6 colonnes sur 12
                md: signifiant prenant 3 colonnes sur 12 sur un écran medium
                sm: prenant 4 colonnes sur 12 sur un écran small -->
                <v-col class="hidden600 ord1" cols="6" md="3" sm="4">
                    <!-- carte vuetify
                    tile: signifiant sans bords arrondis -->
                    <v-card class="carte-terrasse" outlined tile>
                        <h1 class="title title-carte title-terrasse">- La Terrasse -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-terrasse">Pour profiter des longues journées d'été sous une météo avantageuse, la terrasse de votre restaurant est ouverte en continu de 11h00 à 23h00.</p>
                    </v-card>
                </v-col>

                <v-col class="hidden600 ord2" cols="6" md="3" sm="8">
                    <v-card class="image-carte image-terrasse" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden600 ord3" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-pates" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden600 ord4" cols="6" md="3" sm="4">
                    <v-card class="carte-pates" outlined tile>
                        <h1 class="title title-carte title-pates">- Nos Pâtes -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-pates">Tortellinis, Pennes, Gnocchis ou Tagliatelles, à la carbonara ou à la bolognese, nous souhaitons faire plaisir à tous les amateurs de pâtes.</p>
                    </v-card>
                </v-col>

                <v-col class="hidden600 ord5" cols="6" md="3" sm="4">
                    <v-card class="carte-pates" outlined tile>
                        <h1 class="title title-carte title-pizzas">- Nos Pizzas -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-pizzas">Base crême ou base tomate, nous vous proposons des pizzas de toutes sortes pour satisfaire tous nos clients, petits et grands</p>
                    </v-card>
                </v-col>

                <v-col class="hidden600 ord6" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-pizzas" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden600 ord7" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-anniv" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden600 ord8" cols="6" md="3" sm="4">
                    <v-card class="carte-anniv" outlined tile>
                        <h1 class="title title-carte title-anniv">-Anniversaire-</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-anniv">Pour votre anniversaire ou celui d'un proche, venez le fêter dans notre restaurant et profitez d'un dessert personnalisé pour marquer l'évènement</p>
                    </v-card>
                </v-col>


                <v-col class="hidden960 ord1" cols="6" md="3" sm="4">
                    <v-card class="carte-terrasse" outlined tile>
                        <h1 class="title title-carte title-terrasse">- La Terrasse -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-terrasse">Pour profiter des longues journées d'été sous une météo avantageuse, la terrasse de votre restaurant est ouverte en continu de 11h00 à 23h00.</p>
                    </v-card>
                </v-col>

                <v-col class="hidden960 ord2" cols="6" md="3" sm="8">
                    <v-card class="image-carte image-terrasse" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden960 ord3" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-pates" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden960 ord4" cols="6" md="3" sm="4">
                    <v-card class="carte-pates" outlined tile>
                        <h1 class="title title-carte title-pates">- Nos Pâtes -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-pates">Tortellinis, Pennes, Gnocchis ou Tagliatelles, à la carbonara ou à la bolognese, nous souhaitons faire plaisir à tous les amateurs de pâtes.</p>
                    </v-card>
                </v-col>

                <v-col class="hidden960 ord6" cols="6" md="3" sm="4">
                    <v-card class="carte-pates" outlined tile>
                        <h1 class="title title-carte title-pizzas">- Nos Pizzas -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-pizzas">Base crême ou base tomate, nous vous proposons des pizzas de toutes sortes pour satisfaire tous nos clients, petits et grands</p>
                    </v-card>
                </v-col>

                <v-col class="hidden960 ord5" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-pizzas" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden960 ord7" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-anniv" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="hidden960 ord8" cols="6" md="3" sm="4">
                    <v-card class="carte-anniv" outlined tile>
                        <h1 class="title title-carte title-anniv">-Anniversaire-</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-anniv">Pour votre anniversaire ou celui d'un proche, venez le fêter dans notre restaurant et profitez d'un dessert personnalisé pour marquer l'évènement !</p>
                    </v-card>
                </v-col>


                <v-col class="display960 ord1" cols="6" md="3" sm="4">
                    <v-card class="carte-terrasse" outlined tile>
                        <h1 class="title title-carte title-terrasse">- La Terrasse -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-terrasse">Pour profiter des longues journées d'été sous une météo avantageuse, la terrasse de votre restaurant est ouverte en continu de 11h00 à 23h00.</p>
                    </v-card>
                </v-col>

                <v-col class="display960 ord2" cols="6" md="3" sm="8">
                    <v-card class="image-carte image-terrasse" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="display960 ord4" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-pates" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="display960 ord3" cols="6" md="3" sm="4">
                    <v-card class="carte-pates" outlined tile>
                        <h1 class="title title-carte title-pates">- Nos Pâtes -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-pates">Tortellinis, Pennes, Gnocchis ou Tagliatelles, à la carbonara ou à la bolognese, nous souhaitons faire plaisir à tous les amateurs de pâtes.</p>
                    </v-card>
                </v-col>

                <v-col class="display960 ord6" cols="6" md="3" sm="4">
                    <v-card class="carte-pates" outlined tile>
                        <h1 class="title title-carte title-pizzas">- Nos Pizzas -</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-pizzas">Base crême ou base tomate, nous vous proposons des pizzas de toutes sortes pour satisfaire tous nos clients, petits et grands</p>
                    </v-card>
                </v-col>

                <v-col class="display960 ord5" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-pizzas" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="display960 ord7" cols="6" md="3" sm="4">
                    <v-card class="image-carte image-anniv" outlined tile>
                        
                    </v-card>
                </v-col>

                <v-col class="display960 ord8" cols="6" md="3" sm="4">
                    <v-card class="carte-anniv" outlined tile>
                        <h1 class="title title-carte title-anniv">-Anniversaire-</h1>
                        <hr class="hr-carte"/>
                        <p class="text-carte text-anniv">Pour votre anniversaire ou celui d'un proche, venez le fêter dans notre restaurant et profitez d'un dessert personnalisé pour marquer l'évènement !</p>
                    </v-card>
                </v-col>

            </v-row>
      
    </v-container>
        
                    
    </div>
</template>

<script>

export default {
  name: 'ADecouvrir',
  props: {
    
  },

  components: {

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
@import "../../public/style/css/decouvrir.css";


</style>