import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    marksheet: []
  },
  getters: {
    detail: state => state.marksheet
  },
  actions: {
    // method
    // get request..
    async stuMarksheet({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/class/1/A/marks"
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
