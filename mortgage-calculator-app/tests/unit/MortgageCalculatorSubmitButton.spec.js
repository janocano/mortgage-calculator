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
    it("disables the button from click if the button is calculating the results.", async () => {
        await wrapper.setData({ isCalculatingResults: true });
        expect(wrapper.find("BaseButton-stub").attributes("isdisabled")).toBe("true");
    });
});
