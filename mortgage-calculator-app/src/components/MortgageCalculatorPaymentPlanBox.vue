<template>
    <MortgageCaculatorBaseContainer title="Payment Plan">
        <div class="paymentPlanBox">
            <div class="paymentPlanBox__item">
                Mortgage payment ($)
                <BaseFormfield id="mortgagePayment" class="formfield" :placeholder="mortgagePayment" v-model="selectedMortgagePayment" />
            </div>
            <div class="paymentPlanBox__item">
                Interest rate (%)
                <BaseFormfield id="interestRate" class="formfield" :placeholder="interestRate" v-model="selectedInterestRate" />
            </div>
            <div class="paymentPlanBox__item">
                Amortization period (years)
                <BaseDropdown id="amortizationPeriod" class="formfield" :options="amortizationYearOptions" v-model="selectedAmortizationPeriod" />
            </div>
            <div class="paymentPlanBox__item">
                Payment frequency
                <BaseDropdown id="paymentFrequnce" class="formfield" :options="paymentFrequncyOptions" v-model="selectedPaymentFrequncy" />
            </div>
            <div class="paymentPlanBox__item">
                Mortgage term (years)
                <BaseDropdown id="mortgageTerm" class="formfield" :options="mortgageTermOptions" v-model="selectedMortgageTerm" />
            </div>
        </div>
    </MortgageCaculatorBaseContainer>
</template>
<script>
import { mapState } from "vuex";

// Components
import BaseDropdown from "./BaseDropdown.vue";
import BaseFormfield from "./BaseFormfield.vue";
import MortgageCaculatorBaseContainer from "./MortgageCalculatorBaseContainer.vue";
export default {
    components: {
        BaseDropdown,
        BaseFormfield,
        MortgageCaculatorBaseContainer
    },
    data() {
        return {
            amortizationYearOptions: [],
            mortgageTermOptions: [],
            paymentFrequncyOptions: []
        }
    },
    computed: {
        ...mapState(["amortizationPeriodYears", "interestRate", "mortgageTerm", "mortgagePayment", "paymentFrequency"]),
        /**
         * @returns {String}
         */
        selectedAmortizationPeriod: {
            get() {
                return this.amortizationPeriodYears;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_AMORTIZATION_PERIOD_YEARS",
                    amortizationPeriodYears: value
                });
            }

        },
        /**
         * @returns {String}
         */
        selectedInterestRate: {
            get() {
                return this.interestRate;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_INTEREST_RATE",
                    interestRate: value
                });
            }
        },
        /**
         * @returns {String}
         */
        selectedMortgagePayment: {
            get() {
                return this.mortgagePayment;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_MORTGAGE_PAYMENT",
                    mortgagePayment: value
                });
            }
        },
        /**
         * @returns {String}
         */
        selectedMortgageTerm: {
            get() {
                return this.mortgageTerm;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_MORTGAGE_TERM",
                    mortgageTerm: value
                });
            }
        },
        /**
         * @returns {String}
         */
        selectedPaymentFrequncy: {
            get() {
                return this.paymentFrequency;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_PAYMENT_FREQUENCY",
                    paymentFrequency: value
                });
            }

        },
    },
    async mounted() {
        let paymentFrequncyOptions = await this.$store.dispatch("getPaymentFrequencies");
        this.paymentFrequncyOptions = paymentFrequncyOptions;

        let amortizationOptions = await this.$store.dispatch("getAmortizationYearOptions");
        this.amortizationYearOptions = amortizationOptions;

        let mortgageTermOptions = await this.$store.dispatch("getMortgageTermOptions");
        this.mortgageTermOptions = mortgageTermOptions;
    }
}
</script>
<style scoped>
.paymentPlanBox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
}
.paymentPlanBox__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
}
.formfield {
    width: 33%;
}
</style>