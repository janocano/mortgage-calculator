<template>
    <MortgageCalculatorBaseContainer title="Results">
        <div v-if="isResultSubmitted" class="resultsBox__price">
            ${{ shortenedMortgageResult }}
            <span class="resultsBox__price--smallerFont">{{ paymentFrequencyText }}</span>
        </div>
        <div v-else class="resultsBox__empty">
            Nothing to display yet
        </div>
    </MortgageCalculatorBaseContainer>
</template>
<script>
import { mapState } from 'vuex';
import MortgageCalculatorBaseContainer from "./MortgageCalculatorBaseContainer.vue";
export default {
    components: {
        MortgageCalculatorBaseContainer
    },
    data() {
        return {
            currentPaymentFrequency: -1
        };
    },
    computed: {
        ...mapState(["mortgageResult", "paymentFrequency"]),
        /**
         * @returns {Boolean}
         */
        isResultSubmitted() {
            return this.mortgageResult !== -1;
        },
        /**
         * @returns {String}
         */
        paymentFrequencyText() {
            switch(this.currentPaymentFrequency){
                case "52":
                    return "per week";
                case "104":
                    return "bi-weekly";
                case "24": 
                    return "semi-monthly";
                case "12":
                    return "per month";
                default: 
                    return "";
            }
        },
        /**
         * @returns {Number}
         */
        shortenedMortgageResult() {
            return this.mortgageResult.toFixed(2);
        }
    },
    watch: {
        mortgageResult() {
            this.currentPaymentFrequency = this.paymentFrequency;
        }
    }
}
</script>
<style scoped>
.resultsBox__price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin: 8px;
    padding: 15px;
    height: 100%;
    background: rgba(255, 208, 0, 0.5);
    font-size: 40px;
    font-weight: bold;
    color: #005DAA;
}
.resultsBox__price--smallerFont {
    margin-left: 10px;
    font-size: 24px;
}
.resultsBox__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 8px;
    padding: 15px;
    background: rgba(0, 93, 170, 0.5);
    font-size: 24px;
    font-weight: bold;
    color: #005DAA;
}
</style>