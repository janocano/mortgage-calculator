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
    it("displays the price if the mortgage result is not -1.", () => {
        expect(wrapper.find(".resultsBox__price").exists()).toBe(true);
        expect(wrapper.find(".resultsBox__price").isVisible()).toBe(true);
    });
    it("does not render the default empty text the price if the mortgage result is not -1", () => {
        expect(wrapper.find(".resultsBox__empty").exists()).toBe(false);
    });
    it("does not render the price if the mortgage result is -1.", async () => {
        state.mortgageResult = -1;
        await wrapper.vm.$nextTick();
        expect(wrapper.find(".resultsBox__price").exists()).toBe(false);
    });
    it("displays the default text if the mortgage result is -1.", async () => {
        state.mortgageResult = -1;
        await wrapper.vm.$nextTick();
        expect(wrapper.find(".resultsBox__empty").exists()).toBe(true);
        expect(wrapper.find(".resultsBox__empty").isVisible()).toBe(true);
    });
    it("displays the correct text if the payment frequency is 52.", () => {
        expect(wrapper.find(".resultsBox__price--smallerFont").text()).toBe("per week");
    });
});