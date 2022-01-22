<template>
  <v-card
      class="mx-auto"
      max-width="500"
  >
    <v-img
        height="300"
        :src="user.avatar"
    ></v-img>

    <v-card-title> {{user.first_name}} {{user.last_name}} </v-card-title>

    <v-card-text>

      <div class="my-4 text-subtitle-1">
       gender: {{user.gender}}
      </div>

      <div class="my-4 text-subtitle-1">
        Date of birth : {{user.date_of_birth}}
      </div>

      <div> Job title: {{  user.employment ? user.employment.title : '' }}</div>
    </v-card-text>

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

    }),
  }
</script>
