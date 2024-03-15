<template>
  <v-container fluid>
      <v-row md="4" xs="6" v-for="item in $store.getters.getAllItems" :key="item.id">
        <Item :idT="item.id" :name="item.name" :itemsPerPackage="item.itemsPerPackage" :packagesNumber="item.packagesNumber" :vendorCode="item.vendorCode" :invoice="item.invoice" :weight="item.weight" :shelf="item.shelf" :user-id="item.userId"/>
      </v-row>
  </v-container>
</template>

<script lang="ts">
import Item from "../components/Item.vue";
export default {
  name: "SearchPage",
  components: {Item},
  data() {
    return {
      items: [],
    }
  },
  methods: {
  }
}
</script>