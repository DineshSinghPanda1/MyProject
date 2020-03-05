import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

import marks from "./modules/marks";
import syllabus from "./modules/syllabus";
import cards from "./modules/cards";
import application from "./modules/application";
import marksheet from "./modules/marksheet";
import mesh from "./modules/mesh";
import transport from "./modules/transport";
Vue.use(Vuex, Axios);

export default new Vuex.Store({
  modules: {
    marks,
    syllabus,
    cards,
    application,
    marksheet,
    mesh,
    transport
  }
});
