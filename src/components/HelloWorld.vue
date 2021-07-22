<template>
  <v-card>
    <v-card-title> Welcome to the trivia </v-card-title>
    <router-link :to="{ name: 'trivia' }">Start</router-link>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
