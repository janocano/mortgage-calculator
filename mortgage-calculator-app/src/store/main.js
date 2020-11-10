import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

import { SET_MORTGAGE_PAYMENT } from "./mutations.js";

export default new Vuex.Store({
    state: {
        mortgagePayment: 100000
    },
});