<template>
    <MortgageCaculatorBaseContainer title="Payment Plan">
        <div class="paymentPlanBox">
            <div class="paymentPlanBox__item">
                Mortgage payment ($)
                <BaseFormfield id="mortgagePayment" class="formfield" :placeholder="mortgagePayment" v-model="selectedMortgagePayment" />
            </div>
            <div class="paymentPlanBox__item">
                Interest rate (%)
                <BaseFormfield id="interestRate" class="formfield" :placeholder="interestRate" v-model="selectedInterestRate" />
            </div>
        </div>
    </MortgageCaculatorBaseContainer>
</template>
<script>
import { mapState } from "vuex";

// Components
import BaseFormfield from "./BaseFormfield.vue";
import MortgageCaculatorBaseContainer from "./MortgageCalculatorBaseContainer.vue";
export default {
    components: {
        BaseFormfield,
        MortgageCaculatorBaseContainer
    },
    computed: {
        ...mapState(["interestRate", "mortgagePayment"]),
        selectedInterestRate: {
            get() {
                return this.interestRate;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_INTEREST_RATE",
                    interestRate: value
                });
            }
        },
        selectedMortgagePayment: {
            get() {
                return this.mortgagePayment;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_MORTGAGE_PAYMENT",
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
    margin: 5px 0;
}
.formfield {
    width: 60%;
}
</style>