import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mortgagePayment: "100000"
    },
    mutations: {
        /**
         * @param {Object} payload 
         * @param {String} payload.mortgagePayment
         */
        ["SET_MORTGAGE_PAYMENT"](state, payload) {
            state.mortgagePayment = payload.mortgagePayment
        },
    }
});