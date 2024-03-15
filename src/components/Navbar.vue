<template>
<!--  <v-container fluid>-->
    <v-app-bar
        app
        fixed
        elevate-on-scroll
        color="White"

        scroll-target="#v-main"
    >


      <v-toolbar-title>Warehouse</v-toolbar-title>
      <v-btn icon plain small to="/">
        <v-icon>mdi-archive</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn color="primary" to="/Add">
        Добавить товар
      </v-btn>

      <v-spacer></v-spacer>

      <v-text-field
          id="SearchArtField"
          label="Артикул"
          v-model = "searchArtField"
          @input="setSearchArtField"

          hide-details
      ></v-text-field>

      <v-btn small to="/Search" @click="doArtSearch">
        Искать по артикулу
        <v-icon></v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-text-field
          id="SearchField"
          label="Название"
          v-model = "searchField"
          @input="setSearchField"

          hide-details
      ></v-text-field>
      <v-btn small to="/Search" @click="doSearch">
        Искать по названию
        <v-icon></v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        v-bind:color="isActive === true ? 'primary' : 'grey lighten-4'"
        @click="toggle"
      >{{ isActive ? 'Вход' : 'Выход' }}</v-btn>


    </v-app-bar>

<!--  </v-container>-->
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: "NavBar",
  components: {},
  //setup() {
  //  const isActive = computed(() => {
  //    return store.getters.getIsActive;
  //  });
  //},
  data() {

    return {
      titles: [],
      searchField: '',
      searchArtField: '',
      isActive: computed(() => {
      return store.getters.getIsActive;
      }),
      primary: "primary",
      grey: "grey",
    }
  },
  mounted () {
    this.isActive = store.getters.getIsActive
  },
  
  methods: {
    setSearchField(value : string) {
      this.searchField = value;
      this.$store.commit("setSearch", this.searchField);
      this.searchArtField = ''

    },
    setSearchArtField(value : string) {
      this.searchArtField = value;
      store.commit("setArtSearch", this.searchArtField);
      this.searchField = ''

    },
    doSearch() {
      store.dispatch("searchItems");
    },
    doArtSearch() {
      store.dispatch("searchArtItems");
    },
    toggle() {
      if (!this.isActive) {
        store.dispatch("logout");
        store.commit('setReset');
        setTimeout(() => {  console.log("U have logged out!"); }, 5000);
        this.$router.push({path: '/'});

      } else {
        setTimeout(() => {  console.log("Please Login..."); }, 5000);
        this.$router.push({path: '/LogIn'});
      }
    }
  }
})

</script>

<style scoped>

</style>