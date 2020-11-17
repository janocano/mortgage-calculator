<template>
    <BaseButton :isDisabled="isButtonDisabled"  @click.native="calculateMortgage()">
        <template slot="text">
            Calculate
        </template>
    </BaseButton>
</template>
<script>
import { mapState } from "vuex";

import BaseButton from "./BaseButton.vue";
export default {
    components: {
        BaseButton
    },
    data() {
        return {
            isCalculatingResults: false
        };
    },
    computed: {
        ...mapState(["amortizationPeriodYears", "interestRate", "mortgagePayment", "paymentFrequency"]),
        /**
         * @returns {Boolean}
         */
        isButtonDisabled() {
            return this.isCalculatingResults || this.amortizationPeriodYears === -1 || this.interestRate === "" || this.mortgagePayment === "" || this.paymentFrequency === -1;
        },
        /**
         * @returns {Number}
         */
        convertedInterestRate() {
            let interestRateNoCommas = this.interestRate.replace(",", "");
            return parseFloat(interestRateNoCommas)/100;
        },
        /**
         * @returns {Number}
         */
        convertedMortgagePayment() {
            let mortgagePaymentNoCommas = this.mortgagePayment.replace(",", "");
            return parseFloat(mortgagePaymentNoCommas);
        },
        /**
         * @returns {Number}
         */
        interestRatePerPayment() {
            return this.convertedInterestRate/this.paymentFrequency;
        },
        /**
         * @returns {Number}
         */
        totalNumberOfPayments() {
            return this.amortizationPeriodYears*this.paymentFrequency;
        },
    },
    methods: {
        calculateMortgage(){
            this.isCalculatingResults = true;
            try {
                let result = this.calculateMonthlyMortgage(this.convertedMortgagePayment, this.totalNumberOfPayments, this.interestRatePerPayment);
                this.$store.commit({
                    type: "SET_MORTGAGE_RESULT",
                    mortgageResult: result
                });
            } catch(error) {
                alert("There was an error calculating your mortgage. Please check that the fields are filled out correctly.");
            } finally {
                this.isCalculatingResults = false;
            }
        },
        /**
         * @param {Number} totalMortgagePayment
         * @param {Number} months
         * @param {Number} interestRate
         * @returns {Number}
         */
        calculateMonthlyMortgage(totalMortgagePayment, months, interestRate) {
            let factor = Math.pow(1 + interestRate, months);
            return totalMortgagePayment*interestRate*factor/(factor - 1);
        }
    }
}
</script>
<style scoped>

</style>