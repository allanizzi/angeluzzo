import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import 'buefy/dist/buefy.css'

import LoadingPage from './components/LoadingPage.vue';
import HomePage from './components/Home.vue';
import RestaurantNancyCentre from './components/RestNancyCentre.vue';
import RestaurantKinepolisNancy from './components/RestKinepolisNancy.vue';
import RestaurantMetz from './components/RestaurantMetz.vue';
import RestaurantThionville from './components/RestaurantThionville.vue';
import LaCarte from './components/LaCarte.vue';
import ErrorPage from './components/ErrorPage.vue';


Vue.use(Vuetify)
Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {path: '/', component:LoadingPage},
    {path: '/home', component:HomePage},
    {path: '/home/restaurant-nancy-centre', component:RestaurantNancyCentre},
    {path: '/home/restaurant-kinepolis-nancy', component:RestaurantKinepolisNancy},
    {path: '/home/restaurant-metz', component:RestaurantMetz},
    {path: '/home/restaurant-thionville', component:RestaurantThionville},
    {path: '/home/carte', component:LaCarte},
    // en cas d'url différente de celles définies, renvoie de l'utilisateur vers la page d'erreur
    {path: '*', component:ErrorPage}

  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})