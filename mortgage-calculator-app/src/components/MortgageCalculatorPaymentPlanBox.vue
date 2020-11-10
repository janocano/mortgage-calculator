<template>
    <MortgageCaculatorBaseContainer title="Payment Plan">
        <div class="paymentPlanBox">
            <div class="paymentPlanBox__item">
                Mortgage payment ($)
                <BaseFormfield id="mortgagePayment" class="formfield" :placeholder="mortgagePayment" v-model="mortgagePaymentAmount" />
            </div>
        </div>
    </MortgageCaculatorBaseContainer>
</template>
<script>
import { mapState } from "vuex";

// Components
import BaseFormfield from "./BaseFormfield.vue";
import MortgageCaculatorBaseContainer from "./MortgageCalculatorBaseContainer.vue";

// Libs
import { SET_MORTGAGE_PAYMENT } from "../store/mutations.js";
export default {
    components: {
        BaseFormfield,
        MortgageCaculatorBaseContainer
    },
    computed: {
        ...mapState(["mortgagePayment"]),
        mortgagePaymentAmount: {
            get() {
                return this.mortgagePayment;
            },
            set(value) {
                this.$store.commit({
                    type: SET_MORTGAGE_PAYMENT,
                    mortgagePayment: value
                });
            }
        }
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