<template>
  <v-card
      class="mx-auto "
      max-width="500"
      max-height="800"
  >
    <v-card-title> Recent reviews</v-card-title>
    <v-card-text>
      <v-list
          subheader
          two-line
          v-if="Object.keys(allRatings).length !== 0"
      >
        <v-list-item
            v-for="rating in allRatings"
            :key="rating.name"
        >
          <v-list-item-content v-if="rating.name">
            <v-list-item-title v-text="rating.name"></v-list-item-title>

            <v-rating
                v-model="rating.rating"
                color="amber"
                dense
                readonly
                size="14"
                class="pa-1"
            ></v-rating>

            <v-list-item-subtitle v-if="!!rating.userName"
                                  v-text="'rating by ' + rating.userName"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div v-else>
        <v-card-title>No reviews yet</v-card-title>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
          class="mx-auto text--white"
          color="deep-orange"
          dark
          @click="$emit('switchStats')"
      >
        Back to tasting
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: 'card',
  props: ['allRatings'],
  data: () => ({}),
}
</script>

<style lang="scss">
.v-card__text {
  max-height: 450px;
  flex-grow: 1;
  overflow: auto;
}

.v-card__text::-webkit-scrollbar-thumb {
  background: rgba(245, 102, 0, 0.35);
}

.v-card__text::-webkit-scrollbar {
  width: 6px;
}

.v-card__text::-webkit-scrollbar-track {
  background: transparent;
}
</style>
