import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import apiConfig from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    history: [],
    coordinates: {
      x: 0,
      y: 0,
    },
    regionInfo: {},
  },
  getters: {},
  actions: {
    async sendCoordinates({ commit }, coord = {}) {
      const resp = await axios.post(
        `${apiConfig.apiUrl}lat=${coord.y}&lon=${coord.x}&appid=${apiConfig.apiKey}`
      );
      commit("getRegionInfo", resp.data);
    },
    async sendInputValue({ commit }, val = "") {
      const resp = await axios.post(
        `${apiConfig.apiUrl}q=${val}&appid=${apiConfig.apiKey}`
      );
      commit("getRegionInfo", resp.data);
    },
  },
  mutations: {
    getRegionInfo(state, info = {}) {
      state.regionInfo = info;
      state.history.unshift(info);
      console.log(info);
    },
  },
});
