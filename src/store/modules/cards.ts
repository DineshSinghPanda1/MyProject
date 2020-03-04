import axios from "axios";
// most important code.....
export default {
  state: {
    //data
    cards: []
  },

  actions: {
    // method
    // get request..

    async loadCards({ commit }) {
      try {
        const [response1, response2] = await axios.all([
          axios.get("http://192.168.1.136:8000/api/teacher/all/details/of/1"),
          axios.get("http://192.168.1.136:8000/api/teacher/1/subjects")
        ]);
        console.log(response1.data);
        console.log(response2.data);
        const data = response1.data;

        commit("setCards", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    setCards: (state, cards) => (state.cards = cards)
  },
  getters: {
    cardsdetail: state => state.cards
  }
};
