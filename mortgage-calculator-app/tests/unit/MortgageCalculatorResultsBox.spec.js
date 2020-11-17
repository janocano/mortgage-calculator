import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from "vuex";

import MortgageCalculatorResultsBox from "../../src/components/MortgageCalculatorResultsBox.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MortgageCalculatorResultsBox.vue", () => {
    let wrapper, store, state;
    beforeEach(() => {
        state = {
            mortgageResult: 200.123456,
            paymentFrequency: "52"
        };
        store = new Vuex.Store({ state });
        wrapper = shallowMount(MortgageCalculatorResultsBox, { localVue, store });
    });
});