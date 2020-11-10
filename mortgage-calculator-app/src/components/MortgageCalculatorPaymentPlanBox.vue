<template>
    <MortgageCaculatorBaseContainer title="Payment Plan">
        <div class="paymentPlanBox">
        </div>
    </MortgageCaculatorBaseContainer>
</template>
<script>
import MortgageCaculatorBaseContainer from "./MortgageCalculatorBaseContainer.vue";
export default {
    components: {
        MortgageCaculatorBaseContainer
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

</style>