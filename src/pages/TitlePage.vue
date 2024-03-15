<template>
  <v-card
      color="blue-grey darken-1"
      dark
  >
    <template v-slot:progress>
      <v-progress-linear
          absolute
          color="primary"
          height="4"
          indeterminate
      ></v-progress-linear>
    </template>
    <v-form>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="6"
          >
            <h3 class="text-h4" >
              {{ name }} ({{idT}})
            </h3>
          </v-col>
        </v-row>
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
            <div>Номер полки: {{shelf.number}} (id: {{shelf.id}})</div>
          </v-col>
          <v-col align="center" class="mx-0">
            <div>Номер компании: {{userId}}</div>
          </v-col>
        </v-row>
        <v-row>
            <v-btn color="red" @click="deleteCurItem">
              Удалить товар
            </v-btn>
        </v-row>
            <v-spacer></v-spacer>
          <v-row>
            <v-col>
            <v-text-field
                id="NameField"
                label="name товара"
                v-model = "nameField"
                @input="setNameField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>



            <v-col>
            <v-text-field
                id="ItemsPerPackageField"
                label="штук в упаковке(шт/уп)"
                v-model = "itemsPerPackageField"
                @input="setItemsPerPackageField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>

            <v-col>
            <v-text-field
                id="PackagesNumberField"
                label="количество упаковок(шт)"
                v-model = "packagesNumberField"
                @input="setPackagesNumberField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>

            <v-col>
            <v-text-field
                id="VendorCodeField"
                label="артикул"
                v-model = "vendorCodeField"
                @input="setVendorCodeField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>

            <v-col>
            <v-text-field
                id="InvoiceField"
                label="номер накладной"
                v-model = "invoiceField"
                @input="setInvoiceField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>

            <v-col>
            <v-text-field
                id="WeightField"
                label="вес товара(кг)"
                v-model = "weightField"
                @input="setWeightField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                  id="ShelfIdField"
                  label="id полки"
                  v-model = "shelfIdField"
                  @input="setShelfIdField"
                  :rules="[rules.required]"

                  hide-details
              ></v-text-field>
            </v-col>

            <v-col>
            <v-text-field
                id="UserIdField"
                label="id компании"
                v-model = "userIdField"
                @input="setUserIdField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-btn color="grey" :disabled="!isComplete" @click="updateCurItem">
              Обновить информацию о товаре
            </v-btn>
            <v-snackbar
              v-model="snackbar"
              :timeout="snackTime">       
              {{ snackText }}
            </v-snackbar>
            <v-btn color="dark-grey" @click="backSearch">Назад</v-btn>
          </v-col>
      </v-container>
    </v-form>
    <v-divider></v-divider>
  </v-card>
</template>

<script lang="ts">
import store from '@/store';
import router from '@/router';
import { defineComponent } from "vue"
import Shelf from '@/components/Shelf.vue'
export default defineComponent({
  name: "ItemPage",
  components: {Shelf},
  
  data() {
    return {
      idT: "",
      name: "",
      packagesNumber: "",
      vendorCode: "",
      invoice: "",
      weight: "",
      itemsPerPackage: "",
      nameField: "",
      shelf: typeof(Shelf),
      userId: "",
      shelfIdField: '',
      itemsPerPackageField: '',
      packagesNumberField: '',
      vendorCodeField: '',
      invoiceField: '',
      weightField: '',
      userIdField: '',
      snackbar: false,
      snackText: '',
      snackTime: 2000,
      isComplete: false,
      rules: {
          required: (value: any) => !!value || 'Required.',
          },
    }
  },
  mounted() {
    this.idT = store.getters.getId;
    this.name = store.getters.getCurItemName;
    this.itemsPerPackage = store.getters.getCurItemItemsPerPackage;
    this.packagesNumber = store.getters.getCurItemPackagesNumber;
    this.vendorCode = store.getters.getCurItemVendorCode;
    this.invoice = store.getters.getCurItemInvoice;
    this.weight = store.getters.getCurItemWeight;
    this.shelf = store.getters.getCurItemShelf;
    this.userId = store.getters.getCurItemUserId;
    console.log(router);
    this.nameField = store.getters.getCurItemName;
    this.itemsPerPackageField = store.getters.getCurItemItemsPerPackage;
    this.packagesNumberField = store.getters.getCurItemPackagesNumber;
    this.vendorCodeField = store.getters.getCurItemVendorCode;
    this.invoiceField = store.getters.getCurItemInvoice;
    this.weightField = store.getters.getCurItemWeight;
    this.userIdField = store.getters.getCurItemUserId;
    console.log(router);
  },
  
  methods: {
    validCheck(){
      if (this.nameField != '' &&
      this.itemsPerPackageField != '' &&
      this.packagesNumberField != '' &&
      this.vendorCodeField != '' &&
      this.invoiceField != '' &&
      this.weightField != '' &&
      this.shelfIdField != '' &&
      this.userIdField != '') {
        this.isComplete = true
      } else {
        this.isComplete = false
      }
    },
    setNameField(value : string) {
      this.nameField = value;
      store.commit("setCurItemName", this.nameField);
      this.validCheck();
    },
    setShelfIdField(value : string) {
      this.shelfIdField = value;
      store.commit("setCurShelfId", this.shelfIdField);
      this.validCheck();
    },
    setItemsPerPackageField(value : string) {
      this.itemsPerPackageField = value;
      store.commit("setCurItemItemsPerPackage", this.itemsPerPackageField);
      this.validCheck();
    },
    setPackagesNumberField(value : string) {
      this.packagesNumberField = value;
      store.commit("setCurItemPackagesNumber", this.packagesNumberField);
      this.validCheck();
    },
    setVendorCodeField(value : string) {
      this.vendorCodeField = value;
      store.commit("setCurItemVendorCode", this.vendorCodeField);
      this.validCheck();
    },
    setInvoiceField(value : string) {
      this.invoiceField = value;
      store.commit("setCurItemInvoice", this.invoiceField);
      this.validCheck();
    },
    setWeightField(value : string) {
      this.weightField = value;
      store.commit("setCurItemWeight", this.weightField);
      this.validCheck();
    },
    setUserIdField(value : string) {
      this.userIdField = value;
      store.commit("setCurUserId", this.userIdField);
      this.validCheck();
    },
    deleteCurItem() {
      store.dispatch("deleteItem");
      setTimeout(() => {  console.log("Item were delted!"); }, 5000);
      store.commit("resetItems");
      setTimeout(() => {  console.log("Updated search page!"); }, 5000);
      this.snackText = "Информация о товаре была удалена!"
      this.snackbar = true;
      setTimeout(() => {  console.log("Updated search page!"); }, 5000);
    },
    updateCurItem() {
      store.dispatch("updateItem");
      setTimeout(() => {  console.log("Item were updated!"); }, 5000);
      store.commit("resetItems");
      this.snackText = "Информация о товаре была обновлена!"
      this.snackbar = true;
      setTimeout(() => {  console.log("Updated search page!"); }, 5000);
      this.name = this.nameField;
      this.itemsPerPackage = this.itemsPerPackageField;
      this.packagesNumber = this.packagesNumberField;
      this.vendorCode = this.vendorCodeField;
      this.invoice = this.invoiceField;
      this.weight = this.weightField;
      this.userId = this.userIdField;
    },
    backSearch() {
      if (store.getters.getSearchField == '') {
        store.dispatch("searchArtItems");
      } else {
        store.dispatch("searchItems");
      }
      setTimeout(() => {  console.log("Reuploading search results..."); }, 5000);
      this.$router.push({path: '/Search'});
    }
  }
})
</script>

<style scoped>

</style>