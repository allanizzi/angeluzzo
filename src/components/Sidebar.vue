 <template>
    <div class="sidebar" id="sidebar" @click="open = true">
        <!-- Sidebar Buefy -->
        <!-- fullheight: prend la hauteur totale de l'écran
        overlay: sera au dessus de tout élément -->
        <b-sidebar
            type="is-black"
            :fullheight="fullheight"
            :overlay="overlay"
            :open.sync="open"
            >
            <div class="menu-sidebar">
                <a href="/home#home" @click="open = false"><img class="logo-sidebar" src="../../public/Images/logo-angeluzzo-2.png" alt="Angelùzzo Logo" style="width: 60%; margin: auto"/></a>
                <div class="sidebar-title">ANGELUZZO</div>
                <hr class="hr-sidebar"/>
                <b-menu>
                    <b-menu-list>
                        <b-menu-item label="Présentation" tag="a" href="/home#presentation" @click="open = false"></b-menu-item>
                        <b-menu-item label="Nos Produits" tag="a" href="/home#nosProduits" @click="open = false"></b-menu-item>
                        <b-menu-item label="A Découvrir" tag="a" href="/home#aDecouvrir" @click="open = false"></b-menu-item>
                        <b-menu-item label="Notre Equipe" tag="a" href="/home#equipe" @click="open = false"></b-menu-item>
                        <b-menu-item label="Nos Restaurants" tag="a" href="/home#restaurants" @click="open = false"></b-menu-item>
                    </b-menu-list>
                </b-menu>

                <div class="btn-carte">
                    <a href="/home/carte" class="lien-carte">
                        <span>La Carte</span>
                        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z"/></svg>
                    </a>
                </div>
            </div>
        </b-sidebar>

        <img class="icon-menu" src="../../public/Images/icon-menu.png" >
        
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  
  data () {
    return {
        open: false,
        overlay: true,
        fullheight: true,
        labelPosition: 'right',
        position: "is-left",
        isAnimated: true,
        isStepsClickable: true
    }

  }
}
</script>

<style scoped>
@import "../../public/style/css/sidebar.css";

</style>
