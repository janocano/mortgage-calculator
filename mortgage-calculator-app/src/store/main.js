import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);

const MAX_AMORTIZATION_YEARS = 30;
const MAX_MORTGAGE_TERM_YEARS = 10; 
const MONTHS_IN_A_YEAR = 12;
const WEEKS_IN_A_YEAR = 52;
export default new Vuex.Store({
    state: {
        amortizationPeriodYears: -1,
        interestRate: "5.00",
        mortgagePayment: "100000",
        paymentFrequency: -1,
        prepaymentAmount: "",
        prepaymentFrequency: "",
        prepaymentYear: "",
        mortgageResult: -1
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
         * @param {String} payload.mortgageResult
         */
        ["SET_MORTGAGE_RESULT"](state, payload) {
            state.mortgageResult = payload.mortgageResult;
        },
        /**
         * @param {Object} payload 
         * @param {Number} payload.paymentFrequency
         */
        ["SET_PAYMENT_FREQUENCY"](state, payload) {
            state.paymentFrequency = payload.paymentFrequency;
        },
        /**
         * @param {Object} payload 
         * @param {String} payload.prepaymentAmount
         */
        ["SET_PREPAYMENT_AMOUNT"](state, payload) {
            state.prepaymentAmount = payload.prepaymentAmount;
        },
        /**
         * @param {Object} payload 
         * @param {String} payload.prepaymentFrequency
         */
        ["SET_PREPAYMENT_FREQUENCY"](state, payload) {
            state.prepaymentFrequency = payload.prepaymentFrequency;
        },
        /**
         * @param {Object} payload 
         * @param {String} payload.prepaymentYear
         */
        ["SET_PREPAYMENT_YEAR"](state, payload) {
            state.prepaymentYear = payload.prepaymentYear;
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
                    let newObj = {
                        value: i,
                        text: i
                    };
                    years.push(newObj)
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
                    {
                        value: WEEKS_IN_A_YEAR,
                        text: "Weekly"
                    },
                    {
                        value: WEEKS_IN_A_YEAR*2,
                        text: "Bi-weekly"
                    },
                    {
                        value: MONTHS_IN_A_YEAR*2,
                        text: "Semi-monthly"
                    },
                    {
                        value: MONTHS_IN_A_YEAR,
                        text: "Monthly"
                    },
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
                    let newObj = {
                        value: i,
                        text: i
                    };
                    years.push(newObj)
                }
                return Promise.resolve(years);
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }
});