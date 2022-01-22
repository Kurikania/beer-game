<template>
  <v-card
      :loading="loading"
      class="mx-auto"
      max-width="500"
      max-height="800"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title><span class="text--lighten-2">We recommend you to try &nbsp;</span> {{ beer.name }}</v-card-title>

    <v-card-text>
      <v-row
          align="center"
          class="mx-0"
      >
        <v-rating
            v-model="rating"
            color="amber"
            size="20"
            @input="updRating"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ rating }}
        </div>
      </v-row>

      <div class="text-subtitle-1 pt-2">
        Leave a rating
      </div>

    </v-card-text>

    <v-card-title class="py-1">Main characteristics</v-card-title>

    <v-card-text>
      <v-list dense>
        <v-list-item>
          alcohol: {{ beer.alcohol }}
        </v-list-item>
        <v-list-item>
          blg: {{ beer.blg }}
        </v-list-item>
        <v-list-item>
          brand: {{ beer.brand }}
        </v-list-item>
        <v-list-item>
          ibu: {{ beer.ibu }}
        </v-list-item>
        <v-list-item>
          malts: {{ beer.malts }}
        </v-list-item>
        <v-list-item>
          style: {{ beer.style }}
        </v-list-item>
        <v-list-item>
          yeast: {{ beer.yeast }}
        </v-list-item>
      </v-list>

    </v-card-text>

    <v-card-actions>
      <v-btn
          color="deep-orange"
          dark
          class="mx-auto"
          @click="refresh"
      >
        Try another one
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'beerCard',
  props: ['beer'],
  data: () => ({
    loading: false,
    selection: 1,
    rating: 0,
  }),
  methods: {
    refresh() {
      this.rating = 0;
      this.$emit('refresh')
    },
    updRating() {
      this.$emit('updRating', this.beer.id, this.beer.name, this.rating)
    }
  }
}
</script>
