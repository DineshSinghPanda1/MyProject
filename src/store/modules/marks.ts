import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    marks: []
  },
  getters: {
    detail: state => state.marks
  },
  actions: {
    // method
    // get request..
    async loadMarks({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/class/1/A/marks"
        );
        console.log(response.data);
        const data = response.data;
        commit("setMarks", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setMarks: (state, marks) => (state.marks = marks)
  },
  modules: {}
};
