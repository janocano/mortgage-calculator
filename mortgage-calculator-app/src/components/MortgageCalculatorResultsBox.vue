<template>
    <MortgageCalculatorBaseContainer title="Results">
        <div v-if="isResultSubmitted" class="resultsBox__price">
            {{ mortgageResultPerMonth }}
            <span class="resultsBox__price--smallerFont">per month</span>
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
    computed: {
        ...mapState(["mortgageResultPerMonth"]),
        /**
         * @returns {Boolean}
         */
        isResultSubmitted() {
            return this.mortgageResultPerMonth !== -1;
        }
    }
}
</script>
<style scoped>
.resultsBox__price {
    margin: 8px;
    padding: 15px;
    height: 100%;
    background: rgba(255, 208, 0, 0.5);
    font-size: 32px;
    font-weight: bold;
    color: #005DAA;
}
.resultsBox__price--smallerFont {
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