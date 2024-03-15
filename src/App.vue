<template>
  <v-app>
    <Navbar/>
    <v-main id="v-main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<notifications group="foo" />
<script lang="ts">
import Navbar from "./components/Navbar.vue";
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
