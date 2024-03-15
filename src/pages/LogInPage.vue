<template>
  <v-main id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-row>
                  <v-col cols="2">
                  </v-col>
                  <v-col class="d-flex justify-space-around">
                <v-toolbar-title>Введите данные для входа</v-toolbar-title>
                    </v-col>
                    <v-col cols="2" class="d-flex justify-end">
                  </v-col>
                </v-row>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                      prepend-icon="mdi-shield-account"
                      name="login"
                      label="Логин"
                      v-model="loginField"
                      @input="setLoginField"
                      type="text"
                  ></v-text-field>
                  <v-text-field
                      id="password"
                      prepend-icon="mdi-lock"
                      name="password"
                      label="Пароль"
                      v-model="passwordField"
                      @input="setPasswordField"
                      type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-main>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: 'LoginInPage',
  data() {
    return {
      loginField: '',
      passwordField: '',
      isLoggedIn: computed(() => {
      return this.$store.getters.getIsLoggedIn;
      }),
    }
  },
  methods: {
    setLoginField(value : string) {
      this.loginField = value;
      this.$store.commit("setLoginField", this.loginField);
    },
    setPasswordField(value : string) {
      this.passwordField = value;
      this.$store.commit("setPasswordField", this.passwordField);
    },
    login() {

      this.$store.dispatch("login");
      setTimeout(() => {  console.log("You are loged in!"); }, 5000);
      this.$router.push({path: '/'});
      // const response = await axios.post("http://localhost:8081/sekiro-backend/auth/login/", { username : this.loginField , password : this.passwordField});
      // console.log(response);
      // localStorage.setItem('token', response.data.token)

    },
    toMain() {
      this.$store.dispatch("check");
      setTimeout(() => {  console.log("World!"); }, 5000);

    },
    toMainPage() {
      this.$router.push({path: '/'});
    }
  },
  props: {
    source: String,
  },
});
</script>

<style></style>