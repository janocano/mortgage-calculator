<template>
    <MortgageCaculatorBaseContainer title="Payment Plan">
        <div class="paymentPlanBox">
            <div class="paymentPlanBox__item">
                Mortgage payment ($)
                <BaseFormfield id="mortgagePayment" class="formfield" :placeholder="mortgagePayment" />
            </div>
        </div>
    </MortgageCaculatorBaseContainer>
</template>
<script>
import BaseFormfield from "./BaseFormfield.vue";
import MortgageCaculatorBaseContainer from "./MortgageCalculatorBaseContainer.vue";
export default {
    components: {
        BaseFormfield,
        MortgageCaculatorBaseContainer
    },
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
}
.formfield {
    width: 60%;
}
</style>