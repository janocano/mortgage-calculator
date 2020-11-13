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

const MONTHS_IN_A_YEAR = 12;
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
        ...mapState(["amortizationPeriodYears", "interestRate", "mortgagePayment", "mortgageTerm", "paymentFrequency", "prepaymentAmount", "prepaymentFrequency", "prepaymentYear"]),
        /**
         * @returns {Number}
         */
        convertedInterestRate() {
            let interestRateNoCommas = this.interestRate.replace(",", "");
            return parseFloar(interestRateNoCommas);
        },
        /**
         * @returns {Number}
         */
        convertedMortgagePayment() {
            let mortgagePaymentNoCommas = this.mortgagePayment.replace(",", "");
            return parseFloar(mortgagePaymentNoCommas);
        },
        /**
         * @returns {Number}
         */
        monthlyInterestRate() {
            return this.convertedInterestRate/MONTHS_IN_A_YEAR;
        },
    },
    methods: {
        calculateMortgage(){

        }
    }
}
</script>
<style scoped>

</style>