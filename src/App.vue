<template>
  <v-app>
    <v-main>
      <v-container class="container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
:root {
  --max-width: 600px;
  background-color: rgb(222, 210, 226) !important;
}

html {
  font-size: 100%;
}

body {
  font-size: 1rem;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

p {
  font-size: 1.25rem;
  line-height: 2;
}

.container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);
  padding: 1.5rem;
}
</style>
