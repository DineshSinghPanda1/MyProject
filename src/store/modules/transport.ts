import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    transport: []
  },
  getters: {
    detail: state => state.transport
  },
  actions: {
    // method
    // get request..
    async stuTransport({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/class/1/A/marks"
        );
        console.log(response.data);
        const data = response.data;
        commit("setTransport", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setTransport: (state, transport) => (state.transport = transport)
  },
  modules: {}
};
