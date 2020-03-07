import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    mesh: []
  },
  getters: {
    meshdetail: state => state.mesh
  },
  actions: {
    // method
    // get request..
    async loadMesh({ commit }) {
      try {
        const response = await axios.get("http://192.168.1.109:8000/api/menu");
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
