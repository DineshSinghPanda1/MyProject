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
        const response = await axios.get(
          "http://192.168.1.136:8000/api/teacher/all/details/of/1"
        );
        console.log(response.data);
        const data = response.data;
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
