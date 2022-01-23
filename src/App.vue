<template>
  <v-app>
    <v-main class="main">
      <v-container class="d-flex flex-column justify-space-between">
        <v-row class="justify-self-start" align="center" justify="start">
          <v-col>
            <h1 class="mx-auto text-center pb-0"> Beer Game </h1>
          </v-col>
        </v-row>
        <v-row class="card-container mx-auto">
          <v-col>
            <UserCard :user="user" @switchStats="switchStats"/>
          </v-col>
          <v-col>
            <v-fade-transition leave-absolute>
              <Statistics key=1 v-if="isStatsShown" :allRatings="allRatings" @switchStats="switchStats"/>
              <BeerCard key=2 v-else :beer="beer" @refresh="fetchBeerData" @updRating="setRating"/>
             </v-fade-transition>
          </v-col>
        </v-row>
      </v-container>
      <div class="wrap-parallax d-none d-md-flex">
        <vue-parallax-view :layers="layers" :width="'100%'" :height="'100%'"/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import BeerCard from './components/BeerCard';
import UserCard from './components/UserCard';
import Statistics from './components/Statistics';

export default {
  name: 'App',

  components: {
    BeerCard, UserCard, Statistics
  },

  data: () => ({
    urlUser: 'https://random-data-api.com/api/users/random_user',
    urlBeer: 'https://random-data-api.com/api/beer/random_beer',
    beer: {},
    user: {},
    isStatsShown: false,
    ratings: {},
    allRatings: [],
    layers: [
      {
        name: "mug",
        horizontalDisplacement: 0.2,
        verticalDisplacement: 0.1,
        image: require('@/assets/tasty-Beer-Mug-drawing.jpeg'),
        class: "my-custom-layer-class"
      },
    ]
  }),
  computed: {},

  methods: {
    switchStats() {
      this.isStatsShown = !this.isStatsShown;
    },
    setRating(id, name, rating) {
      console.log("id, name, rating ", id, name, rating);
      this.$localStorage.set(id, JSON.stringify({
        name,
        rating,
        userId: this.user.id,
        userName: `${this.user.first_name} ${this.user.last_name}`
      }));
      this.ratings = JSON.parse(this.$localStorage.get(this.beer.id));
      this.allRatings = this.updAllRatings()
    },
    updAllRatings() {
      let items = {...window.localStorage};
      if (Object.keys(items).length !== 0) {
        Object.entries(items).map(entry => {
          try {
            items[entry[0]] = JSON.parse(entry[1]);
          } catch (err) {

          }
        });
      }
      return items;
    },
    async fetchBeerData() {
      const res = await this.$http.get(this.urlBeer);
      this.beer = res.data;
      this.beer.rating = 0;
    },
    async fetchUserData() {
      const res = await this.$http.get(this.urlUser);
      this.user = res.data;
    },
  },
  mounted() {
    this.fetchBeerData();
    this.fetchUserData();
    this.allRatings = this.updAllRatings()
  }
};
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_colors.scss';

.main::-webkit-scrollbar-thumb {
  background: rgba(245, 102, 0, 0.35);
}

.main::-webkit-scrollbar {
  width: 6px;
}

.main::-webkit-scrollbar-track {
  background: transparent;
}

.container {
  height: 100%;
  max-height: 1200px;
}

.justify-self-start {
  justify-self: start;
}

.main {
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  width: 100vw;
  height: 100vh;
}

@media screen and (min-height: 900px) {
  .main {
    overflow-y: hidden;
  }
}

.card-container {
  max-width: 1400px;
  position: relative;
  z-index: 10;
}

.wrap-parallax {
  position: absolute;
  left: 90%;
  top: 90%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  overflow: visible;
  z-index: 0;
}

.vue-parallax-view {
  overflow: visible !important;
}

h1 {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2.5em;
}

.my-custom-layer-class {
  height: 300px;
  max-width: 375px;
  position: absolute;
  transform-origin: left bottom;
  will-change: transform;
  transition: 300ms transform linear;
  background-repeat: no-repeat;
}
</style>
