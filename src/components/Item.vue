<template>
  <v-card @click="setCurItemInfo" class="mx-auto my-12"
      max-width="1000"
  >
    <v-card-title>{{name}} ({{idT}})</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-col align="center" class="mx-0">
          <div>Штук в упаковке: {{itemsPerPackage}}</div>
        </v-col>

        <v-col align="center" class="mx-0">
          <div>Количество упаковок: {{packagesNumber}}</div>
        </v-col>

        <v-col align="center" class="mx-0">
          <div>Артикул: {{vendorCode}}</div>
        </v-col>

        <v-col align="center" class="mx-0">
          <div>Номер накладной: {{invoice}}</div>
        </v-col>

        <v-col align="center" class="mx-0">
          <div>Вес: {{weight}}</div>
        </v-col>

        <v-col align="center" class="mx-0">
          <div>Номер полки: {{shelf.number}}</div>
        </v-col>

        <v-col align="center" class="mx-0">
          <div>Номер компании: {{userId}}</div>
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import store from "@/store";
import router from "@/router";
import Shelf from "@/components/Shelf.vue"
//    })
export default defineComponent({
  name: "Item",
  components: {Shelf},
  //
  props : {idT : String, name : String, itemsPerPackage  : String, packagesNumber  : String, vendorCode  : String, invoice  : String, weight  : String, shelf : Object, userId  : String},

  data() {
    return {
    }
  },
  methods: {
    setCurItemInfo() {
      store.commit("setId", this.idT);
      store.commit("setCurItemName", this.name);
      store.commit("setCurItemItemsPerPackage", this.itemsPerPackage);
      store.commit("setCurItemPackagesNumber", this.packagesNumber);
      store.commit("setCurItemVendorCode", this.vendorCode);
      store.commit("setCurItemInvoice", this.invoice);
      store.commit("setCurItemWeight", this.weight);
      store.commit("setCurShelf", this.shelf);
      store.commit("setCurUserId", this.userId);
      router.push({path: '/title'});
    }
  }
})
</script>

<style scoped>

</style>