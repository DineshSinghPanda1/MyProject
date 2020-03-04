import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    mesh: []
  },
  getters: {
    detail: state => state.mesh
  },
  actions: {
    // method
    // get request..
    async setMesh({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/class/1/A/marks"
        );
        console.log(response.data);
        const data = response.data;
        commit("setMesh", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setMesh: (state, mesh) => (state.mesh = mesh)
  },
  modules: {}
};
