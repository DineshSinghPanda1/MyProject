import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    marksheet: []
  },
  getters: {
    marksheetdetail: state => state.marksheet
  },
  actions: {
    // method
    // get request..
    async loadMarksheet({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/marksheet/assessment/of/student/1"
        );
        console.log(response.data);
        const data = response.data;
        commit("setMarksheet", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setMarksheet: (state, marksheet) => (state.marksheet = marksheet)
  },
  modules: {}
};
