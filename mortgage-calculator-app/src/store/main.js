import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

const MAX_AMORTIZATION_YEARS = 30;

export default new Vuex.Store({
    state: {
        amortizationPeriodYears: "25 years",
        interestRate: "5.00",
        mortgagePayment: "100000",
        paymentFrequency: ""
    },
    mutations: {
        /**
         * @param {Object} payload 
         * @param {String} payload.amortizationPeriodYears
         */
        ["SET_AMORTIZATION_PERIOD_YEARS"](state, payload) {
            state.amortizationPeriodYears = payload.amortizationPeriodYears;
        },
        /**
         * @param {Object} payload 
         * @param {String} payload.interestRate
         */
        ["SET_INTEREST_RATE"](state, payload) {
            state.interestRate = payload.interestRate;
        },
        /**
         * @param {Object} payload 
         * @param {String} payload.mortgagePayment
         */
        ["SET_MORTGAGE_PAYMENT"](state, payload) {
            state.mortgagePayment = payload.mortgagePayment;
        },
        /**
         * @param {Object} payload 
         * @param {String} payload.mortgagePayment
         */
        ["SET_PAYMENT_FREQUENCY"](state, payload) {
            state.paymentFrequency = payload.paymentFrequency;
        },

    },
    actions: {
        /**
         * @returns {Promise}
         */
        getAmortizationYearOptions() {
            try {
                let years = ["1 year"];
                for (let i = 2; i <= MAX_AMORTIZATION_YEARS; i++) {
                    years.push(`${i} years`)
                }
                return Promise.resolve(years);
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
});