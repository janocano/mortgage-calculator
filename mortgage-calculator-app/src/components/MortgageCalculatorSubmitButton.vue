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
        ...mapState(["amortizationPeriodYears", "interestRate", "mortgagePayment", "mortgageTerm", "paymentFrequency", "prepaymentAmount", "prepaymentFrequency", "prepaymentYear"]),
        
    },
    methods: {
        calculateMortgage(){

        }
    }
}
</script>
<style scoped>

</style>