import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from "vuex";

import MortgageCalculatorResultsBox from "../../src/components/MortgageCalculatorResultsBox.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MortgageCalculatorResultsBox.vue", () => {
    let wrapper, store, state;
    beforeEach(() => {
        state = {
            mortgageResult: 200.123,
            paymentFrequency: "52"
        };
        store = new Vuex.Store({ state });
        wrapper = shallowMount(MortgageCalculatorResultsBox, { localVue, store });
    });
    it("displays the mortgage rate up to two decimal places.", () => {
        expect(wrapper.find(".resultsBox__price").text()).toContain("200.12");
        expect(wrapper.find(".resultsBox__price").text()).not.toContain(`${state.mortgageResult}`);
    });
    it("displays the mortgage rate up to two decimal places given a mortgage result with less than 2 decimal places.", async () => {
        state.mortgageResult = 200;
        await wrapper.vm.$nextTick();
        expect(wrapper.find(".resultsBox__price").text()).toContain("200.00");
    });
});