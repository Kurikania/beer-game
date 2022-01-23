<template>
  <v-card
      class="mx-auto"
      max-width="500"
  >
    <v-img
        height="300"
        :src="user.avatar"
        contain
    ></v-img>

    <v-card-title> {{user.first_name}} {{user.last_name}} </v-card-title>
    <a class="d-block d-sm-none v-card--link mx-4" @click="showDetails = !showDetails">
      {{ showDetails? 'Hide details' : 'Show details'}}
    </a>
    <v-fade-transition>
    <v-card-text v-if="showDetails" >
      <div class="my-1 my-md-4 text-subtitle-1">
       gender: {{user.gender}}
      </div>

      <div class="my-1 my-md-4 text-subtitle-1">
        Date of birth : {{user.date_of_birth}}
      </div>

      <div> Job title: {{  user.employment ? user.employment.title : '' }}</div>
    </v-card-text>
    </v-fade-transition>


    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
          class="mx-auto "
          color="deep-orange"
          dark
          @click="$emit('switchStats')"
      >
        Show/hide Rating
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'card',
    props: ['user'],
    data: () => ({
      showDetails: true
    }),
  }
</script>

