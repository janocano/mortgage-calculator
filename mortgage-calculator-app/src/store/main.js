import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        interestRate: "5.00",
        mortgagePayment: "100000",
    },
    mutations: {
        /**
         * @param {Object} payload 
         * @param {String} payload.interestRate
         */
        ["SET_INTEREST_RATE"](state, payload) {
            state.interestRate = payload.interestRate
        },
        /**
         * @param {Object} payload 
         * @param {String} payload.mortgagePayment
         */
        ["SET_MORTGAGE_PAYMENT"](state, payload) {
            state.mortgagePayment = payload.mortgagePayment
        },
    }
});