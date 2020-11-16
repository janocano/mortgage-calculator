import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from "vuex";

import MortgageCalculatorSubmitButton from "../../src/components/MortgageCalculatorSubmitButton.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MortgageCalculatorSubmitButton.vue", () => {
    let wrapper, store, state, mutations;
    let stubs = ["BaseButton"];
    beforeEach(() => {
        state = {
            amortizationPeriodYears: 25,
            interestRate: "1.74",
            mortgagePayment: "150,000",
            paymentFrequency: 52,
        };
        mutations = {
            SET_MORTGAGE_RESULT: jest.fn()
        };
        store = new Vuex.Store({
            state, mutations
        });
        wrapper = shallowMount(MortgageCalculatorSubmitButton, { localVue, store, stubs });
    });
});
