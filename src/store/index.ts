import Vue from 'vue'
import Vuex from 'vuex'
import Item from '@/components/Item.vue'
import Shelf from '@/components/Shelf.vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idT: "",
    items: [] as typeof Item[],
    searchField: "",
    searchArtField: "",
    curItemName: "",
    curItemItemsPerPackage: "",
    curItemPackagesNumber: "",
    curItemVendorCode: "",
    curItemInvoice: "",
    curItemWeight: "",
    curUserId: "",
    curShelfId: "",
    curShelf: typeof(Shelf),
    loginField: "",
    passwordField: "",
    token: "",
    isActive: true,
    isLoggedIn: false,
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload
    },
    setId(state, payload) {
        state.idT = payload
    },
    setSearch(state, payload) {
        state.searchField = payload
    },
    setArtSearch(state, payload) {
        state.searchArtField = payload
    },
    setCurItemName(state, payload) {
        state.curItemName = payload
    },
    setCurItemItemsPerPackage(state, payload) {
        state.curItemItemsPerPackage = payload
    },
    setCurItemPackagesNumber(state, payload) {
        state.curItemPackagesNumber = payload
    },
    setCurItemVendorCode(state, payload) {
        state.curItemVendorCode = payload
    },
    setCurItemInvoice(state, payload) {
        state.curItemInvoice = payload
    },
    setCurItemWeight(state, payload) {
        state.curItemWeight = payload
    },
    setCurUserId(state, payload) {
        state.curUserId = payload
    },
    setCurShelf(state, payload) {
        state.curShelf = payload
    },
    setCurShelfId(state, payload) {
        state.curShelfId = payload
    },
    setLoginField(state, payload) {
      state.loginField = payload
    },
    setPasswordField(state, payload) {
        state.passwordField = payload
    },
    setToken(state, payload) {
        state.token = payload
    },
    setReset(state) {
      state.idT= "",
      state.items = [] as typeof Item[],
      state.searchField = "",
      state.searchArtField = "",
      state.curItemName = "",
      state.curItemItemsPerPackage = "",
      state.curItemPackagesNumber = "",
      state.curItemVendorCode = "",
      state.curItemInvoice = "",
      state.curItemWeight = "",
      state.curUserId = "",
      state.curShelfId = "",
      state.curShelf = typeof(Shelf),
      state.loginField = "",
      state.passwordField = "",
      state.token = ""
    },
    resetItems(state) {
      state.items = [] as typeof Item[]
    },
    setIsActive(state, payload) {
      state.isActive = payload
    }
  },
  getters: {
    getAllItems(state) {
        return state.items
    },
    getId(state) {
        return state.idT
    },
    getSearchField(state) {
        return state.searchField
    },
    getSearchArtField(state) {
        return state.searchArtField
    },
    getCurItemName(state) {
        return state.curItemName
    },
    getCurItemItemsPerPackage(state) {
        return state.curItemItemsPerPackage
    },
    getCurItemPackagesNumber(state) {
        return state.curItemPackagesNumber
    },
    getCurItemVendorCode(state) {
        return state.curItemVendorCode
    },
    getCurItemInvoice(state) {
        return state.curItemInvoice
    },
    getCurItemWeight(state) {
        return state.curItemWeight
    },
    getCurItemShelf(state) {
        return state.curShelf
    },
    getCurItemUserId(state) {
        return state.curUserId
    },
    getCurItemShelfId(state) {
        return state.curShelfId
    },
    getLoginField(state) {
      return state.loginField
    },
    getPasswordField(state) {
        return state.passwordField
    },
    getToken(state) {
        return state.token
    } ,
    getIsActive(state) {
      return state.isActive
    },
    getIsLoggedIn(state) {
      return state.isLoggedIn
    }
  },
  actions: {
    login({state, getters, commit, dispatch}) {
      console.log(state, getters);
      console.log(localStorage)
      // axios.post("http://localhost:8081/sekiro-backend/auth/login/", { username : getters.getLoginField, password : getters.getPasswordField})
      //     .then(response => commit("setToken", response.data.token));
      // localStorage.setItem('token', getters.getToken)

      axios.post("http://localhost:8081/warehouse-backend/auth/login", { password : getters.getPasswordField, username : getters.getLoginField})
          .then(response => {
            localStorage.setItem('token', response.data.token)});
            state.isActive = false;
      // const response = await axios.post("http://localhost:8081/sekiro-backend/auth/login/", { username : getters.getLoginField, password : getters.getPasswordField});
      // console.log(response);
      // localStorage.setItem('token', 'asdas');
    },
    check({state, getters}) {
      if (getters.getToken != "") {
        localStorage.setItem('token', getters.getToken);
        state.isActive = false;
        state.isLoggedIn = true;
        state.token = "";
      }
    },
    logout({state}) {
        localStorage.setItem('token', '0');
        state.isActive = true;
        state.isLoggedIn = false;
    },
    searchItems({state, getters, commit, dispatch}) {
      console.log(state, getters);
      const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      axios.get("http://localhost:8081/warehouse-backend/item?name=" + getters.getSearchField, config)
          .then(response => commit("setItems", response.data))
    },
    searchArtItems({state, getters, commit, dispatch}) {
        console.log(state, getters);
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        axios.get("http://localhost:8081/warehouse-backend/item?vendorCode=" + getters.getSearchArtField, config)
            .then(response => commit("setItems", response.data))
    },
    deleteItem({state, getters, commit, dispatch}) {
        console.log(state, getters);
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        axios.delete("http://localhost:8081/warehouse-backend/item/" + getters.getId, config)
      
    },
    postItem({state, getters, commit, dispatch}) {
        console.log(state, getters);
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        axios.post("http://localhost:8081/warehouse-backend/item", { name : getters.getCurItemName, itemsPerPackage : getters.getCurItemItemsPerPackage, packagesNumber : getters.getCurItemPackagesNumber, vendorCode : getters.getCurItemVendorCode, invoice : getters.getCurItemInvoice, weight : getters.getCurItemWeight, shelfId : getters.getCurItemShelfId, userId : getters.getCurItemUserId }, config)
      
    },
    updateItem({state, getters, commit, dispatch}) {
        console.log(state, getters);
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        axios.post("http://localhost:8081/warehouse-backend/item/" + getters.getId, { name : getters.getCurItemName, itemsPerPackage : getters.getCurItemItemsPerPackage, packagesNumber : getters.getCurItemPackagesNumber, vendorCode : getters.getCurItemVendorCode, invoice : getters.getCurItemInvoice, weight : getters.getCurItemWeight, shelfId : getters.getCurItemShelfId, userId : getters.getCurItemUserId }, config)
      
    },

  },
  modules: {
  }
})
