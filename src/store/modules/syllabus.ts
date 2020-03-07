import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    syllabus: []
  },
  getters: {
    allsyllabus: state => state.syllabus
  },
  actions: {
    // method
    // get request..
    async loadSyllabus({ commit }) {
      try {
        const response = await axios.get("http://192.168.1.109:8000/api/class");
        console.log(response.data);
        const data = response.data;
        commit("setSyllabus", response.data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setSyllabus: (state, syllabus) => (state.syllabus = syllabus)
  },
  modules: {}
};
