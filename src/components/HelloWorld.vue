<template>
  <v-card>
    <v-card-title> Welcome to the trivia </v-card-title>
    <router-link :to="{ name: 'trivia' }">Start with the trivia</router-link>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
