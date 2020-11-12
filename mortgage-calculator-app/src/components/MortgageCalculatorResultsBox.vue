<template>
    <MortgageCalculatorBaseContainer title="Results">
        <div class="resultsBox__price">
            {{ mortgageResultPerMonth }}
            <span class="resultsBox__price--smallerFont">per month</span>
        </div>
        <div class="resultsBox__empty">
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
    }
}
</script>
<style scoped>
.resultsBox__price {
    margin: 8px;
    background: rgba(255, 208, 0, 0.5);
    font-size: 32px;
    font-weight: bold;
    color: #005DAA;
}
.resultsBox__price--smallerFont {
    font-size: 24px;
}
</style>