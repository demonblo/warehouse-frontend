
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

            <v-text-field
                id="NameField"
                label="name товара"
                v-model = "nameField"
                @input="setNameField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
          <v-row>
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
                id="itemsPerPackageField"
                label="количество товара в упаковке(шт/уп)"
                v-model = "itemsPerPackageField"
                @input="setItemsPerPackageField"
                :rules="[rules.required]"

                hide-details
            ></v-text-field>
            </v-col>

            <v-col>
            <v-text-field
                id="PackagesNumberField"
                label="Количество упаковок(шт)"
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
                  id="UserIdField"
                  label="id компании"
                  v-model = "userIdField"
                  @input="setUserIdField"
                  :rules="[rules.required]"

                  hide-details
              ></v-text-field>
            </v-col>

          </v-row>
        <v-row>
          <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!isComplete" @click="postCurItem">
              Добавить товар
            </v-btn>
            <v-snackbar
              v-model="snackbar"
              :timeout="snackTime">       
              {{ snackText }}
            </v-snackbar>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
  </v-card>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "NewItemPage",
  components: {},
  data() {
    return {
      nameField: '',
      shelfIdField: '',
      itemsPerPackageField: '',
      packagesNumberField: '',
      vendorCodeField: '',
      invoiceField: '',
      weightField: '',
      userIdField: '',
      snackbar: false,
      snackText: "Товар был добавлен!",
      snackTime: 2000,
      isComplete: false,
      rules: {
          required: (value: any) => !!value || 'Required.',
          },
    }
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
      store.commit('setCurUserId', value);
      this.validCheck();
    },
    postCurItem() {
      store.dispatch("postItem");
      this.snackbar = true;
    }

  }
})
</script>

<style scoped>

</style>