import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    application: []
  },
  getters: {
    applicationdetail: state => state.application
  },
  actions: {
    // method
    // get request..
    async loadApplication({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/leaves/13/overall"
        );
        console.log(response.data);
        const data = response.data;
        commit("setApplication", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setApplication: (state, application) => (state.application = application)
  },
  modules: {}
};
