<template>
    <BaseButton :isDisabled="isCalculatingResults"  @click.native="calculateMortgage()">
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
        ...mapState(["amortizationPeriodYears", "interestRate", "mortgagePayment", "paymentFrequency", "prepaymentAmount", "prepaymentFrequency", "prepaymentYear"]),
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
            let result = this.calculateMonthlyMortgage(this.convertedMortgagePayment, this.totalNumberOfPayments, this.interestRatePerPayment);
            this.$store.commit({
                type: "SET_MORTGAGE_RESULT",
                mortgageResult: result
            });
        },
        calculateMonthlyMortgage(totalMortgagePayment, months, interestRate) {
            let factor = Math.pow(1 + interestRate, months);
            return totalMortgagePayment*interestRate*factor/(factor - 1);
        }
    }
}
</script>
<style scoped>

</style>