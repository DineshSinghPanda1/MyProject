import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);
export default new Vuex.Store({
  state: {
    marks: []
  },
  mutations: {
    SET_MARKS(state, marks) {
      state.marks = marks;
    }
  },
  actions: {
    loadMarks({ commit }) {
      axios
        .get("http://192.168.1.136:8000/api/class/1/A/marks")
        .then(data => {
          console.log(data.data);
          let marks = data.data;
          commit("SET_MARKS", marks);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {}
});
