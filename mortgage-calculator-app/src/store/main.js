import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

const MAX_AMORTIZATION_YEARS = 30;
const MAX_MORTGAGE_TERM_YEARS = 10; 
export default new Vuex.Store({
    state: {
        amortizationPeriodYears: 25,
        interestRate: "5.00",
        mortgagePayment: "100000",
        mortgageTerm: 1,
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
         * @param {String} payload.mortgageTerm
         */
        ["SET_MORTGAGE_TERM"](state, payload) {
            state.mortgageTerm = payload.mortgageTerm;
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
                let years = [];
                for (let i = 1; i <= MAX_AMORTIZATION_YEARS; i++) {
                    years.push(i)
                }
                return Promise.resolve(years);
            } catch (error) {
                return Promise.reject(error);
            }
        },
        /**
         * @returns {Promise}
         */
        getPaymentFrequencies() {
            try {
                let options = [
                    "Weekly",
                    "Accelerated weekly",
                    "Bi-weekly",
                    "Accelerated bi-weekly",
                    "Semi-monthly",
                    "Monthly",
                ];
                return Promise.resolve(options);
            } catch (error) {
                return Promise.reject(error);
            }
        },
        /**
         * @returns {Promise}
         */
        getMortgageTermOptions() {
            try {
                let years = [];
                for (let i = 1; i <= MAX_MORTGAGE_TERM_YEARS; i++) {
                    years.push(i)
                }
                return Promise.resolve(years);
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }
});