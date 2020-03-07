import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    schoolactivity: []
  },
  getters: {
    activitydetail: state => state.schoolactivity
  },
  actions: {
    // method
    // get request..
    async loadSchoolActivity({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.109:8000/api/activity"
        );
        console.log(response.data);
        const data = response.data;
        commit("setSchoolActivity", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setSchoolActivity: (state, schoolactivity) =>
      (state.schoolactivity = schoolactivity)
  },
  modules: {}
};
