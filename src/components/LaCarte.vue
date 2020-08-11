<template>

    <div class="laCarte" id="laCarte">
        <div class="filter-black">
            <h1 class="title title-carte"><hr class="hr-title hr-carte01"/>La Carte<hr class="hr-title hr-carte02"/></h1>
            
            <!-- carousel buefy -->
              <!-- 
                autoplay: changera automatiquement de slides
                avec une list des éléments du carousel
                indicator: indicateur signifiant si le carousel est mis en pause lors d'un hover par exemple
                overlay: gallery verra les éléments du carousel comme une gallery photo en bas
               -->
            <b-carousel
                :autoplay="false"
                with-carousel-list
                :indicator="false"
                :overlay="gallery"
                class="carousel-carte animate__animated animate__zoomIn">
                <b-carousel-item v-for="(item, i) in items" :key="i">
                    <!-- au clic, agrandi le carousel -->
                    <figure @click="switchGallery(true)" class="image">
                        <img :src="item.image">
                    </figure>
                </b-carousel-item>
                <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
                <template slot="list" slot-scope="props">
                    <b-carousel-list
                        id="list-carousel-carte"
                        v-model="props.active"
                        :data="items"
                        :config="al"
                        :refresh="gallery"
                        @switch="props.switch($event, false)"
                        as-indicator />
                </template>
            </b-carousel>

            <h1 class="title title-drink"><hr class="hr-title-drink hr-carte01"/>Carte des vins et boissons<hr class="hr-title-drink hr-carte02"/></h1>

            <b-carousel
                :autoplay="false"
                with-carousel-list
                :indicator="false"
                :overlay="gallery02"
                class="carousel-carte carousel-boissons animate__animated animate__zoomIn">
                <b-carousel-item v-for="(item, i) in items02" :key="i">
                    <figure @click="switchGallery02(true)" class="image">
                        <img :src="item.image">
                    </figure>
                </b-carousel-item>
                <span v-if="gallery02" @click="switchGallery02(false)" class="modal-close is-large"/>
                <template slot="list" slot-scope="props">
                    <b-carousel-list
                        id="list-carousel-drinks"
                        v-model="props.active"
                        :data="items02"
                        :config="al02"
                        :refresh="gallery02"
                        @switch="props.switch($event, false)"
                        as-indicator />
                </template>
            </b-carousel>
        </div>
    </div>
</template>

<script>

export default {
  name: 'LaCarte',
  props: {
    
  },
  
  data() {
        return {
            gallery: false,
            gallery02: false,
            al: {
                hasGrayscale: true,
                itemsToShow: 3,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 4
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 6
                    }
                }
            },
            al02: {
                hasGrayscale: true,
                itemsToShow: 2
            },
            items: [
                {
                    title: 'Carte 1',
                    image: '../../Images/carte1.jpg'
                },
                {
                    title: 'Carte 2',
                    image: '../../Images/carte2.jpg'
                },
                {
                    title: 'Carte 3',
                    image: '../../Images/carte3.jpg'
                },
                {
                    title: 'Carte 4',
                    image: '../../Images/carte4.jpg'
                },
                {
                    title: 'Carte 5',
                    image: '../../Images/carte5.jpg'
                },
                {
                    title: 'Carte 6',
                    image: '../../Images/carte6.jpg'
                },
                {
                    title: 'Carte 7',
                    image: '../../Images/carte7.jpg'
                },
                {
                    title: 'Carte 8',
                    image: '../../Images/carte8.jpg'
                },
                {
                    title: 'Carte 9',
                    image: '../../Images/carte9.jpg'
                },
                {
                    title: 'Carte 10',
                    image: '../../Images/carte10.jpg'
                },
                {
                    title: 'Carte 11',
                    image: '../../Images/carte13.jpg'
                }
            ],
            items02: [
                {
                    title: 'Carte 1',
                    image: '../../Images/carte11-boissons.jpg'
                },
                {
                    title: 'Carte 2',
                    image: '../../Images/carte12-vins.jpg'
                }
            ]
        }
    },
    methods: {
        switchGallery(value) {
            this.gallery = value;
            if (value) {
                document.getElementById('list-carousel-carte').style.display = "none";
                return document.documentElement.classList.add('is-clipped');
            } else {
                document.getElementById('list-carousel-carte').style.display = "block";
                return document.documentElement.classList.remove('is-clipped');

            }
        },
        switchGallery02(value) {
            this.gallery02 = value;
            if (value) {
                document.getElementById('list-carousel-drinks').style.display = "none";
                return document.documentElement.classList.add('is-clipped');
            } else {
                document.getElementById('list-carousel-drinks').style.display = "block";
                return document.documentElement.classList.remove('is-clipped');

            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../public/style/css/laCarte.css";

.animate__animated.animate__zoomIn {
  --animate-duration: 2s;
}

</style>