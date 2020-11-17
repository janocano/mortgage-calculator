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
    describe("Disabling the button", () => {
        it("does not disable the button from click if the button is not calculating the results and all the required fields are filled in.", async () => {
            await wrapper.setData({ isCalculatingResults: false });
            expect(wrapper.find("BaseButton-stub").attributes()).not.toContain("isdisabled");
        });
        it("disables the button from click if the button is calculating the results.", async () => {
            await wrapper.setData({ isCalculatingResults: true });
            expect(wrapper.find("BaseButton-stub").attributes("isdisabled")).toBe("true");
        });
        it("disables the button from click if the amortization period is not yet chosen.", async () => {
            state.amortizationPeriodYears = -1;
            await wrapper.vm.$nextTick();
            expect(wrapper.find("BaseButton-stub").attributes("isdisabled")).toBe("true");
        });
        it("disables the button from click if the interest rate is empty.", async () => {
            state.interestRate = "";
            await wrapper.vm.$nextTick();
            expect(wrapper.find("BaseButton-stub").attributes("isdisabled")).toBe("true");
        });
        it("disables the button from click if the mortgage payment is empty.", async () => {
            state.mortgagePayment = "";
            await wrapper.vm.$nextTick();
            expect(wrapper.find("BaseButton-stub").attributes("isdisabled")).toBe("true");
        });
        it("disables the button from click if the payment frequency is not yet chosen.", async () => {
            state.paymentFrequency = -1;
            await wrapper.vm.$nextTick();
            expect(wrapper.find("BaseButton-stub").attributes("isdisabled")).toBe("true");
        });
    });
    describe("Calculating the mortgage", () => {
        
    });
});
