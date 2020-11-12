<template>
    <MortgageCaculatorBaseContainer title="Payment Plan">
        <div class="paymentPlanBox">
            <div class="paymentPlanBox__item">
                Prepayment amount ($)
                <BaseFormfield id="prepaymentAmount" class="formfield" :placeholder="prePaymentAmount" v-model="selectedPrepaymentAmount" />
            </div>
            <div class="paymentPlanBox__item">
                Prepayment frequency
                <BaseDropdown id="prepaymentFrequency" class="formfield" :options="prepaymentFrequencyOptions" v-model="selectedPrepaymentFrequncy" />
            </div>
            <div class="paymentPlanBox__item">
                Prepayment year (number)
                <BaseFormfield id="prepaymentYear" class="formfield" :placeholder="prePaymentYear" v-model="selectedPrepaymentYear" />
            </div>
        </div>
    </MortgageCaculatorBaseContainer>
</template>
<script>
import { mapState } from "vuex";

// Components
import BaseDropdown from "./BaseDropdown.vue";
import BaseFormfield from "./BaseFormfield.vue";
import MortgageCaculatorBaseContainer from "./MortgageCalculatorBaseContainer.vue";

const PREPAYMENT_FREQUENCY_OPTIONS = [
    "One time",
    "Each year",
    "Same as regular payment"
];
export default {
    components: {
        BaseDropdown,
        BaseFormfield,
        MortgageCaculatorBaseContainer
    },
    data() {
        return {
            prepaymentFrequencyOptions: PREPAYMENT_FREQUENCY_OPTIONS
        };
    },
    computed: {
        ...mapState(["prepaymentAmount", "prepaymentFrequency", "prepaymentYear"]),
        /**
         * @returns {String}
         */
        selectedPrepaymentAmount: {
            get() {
                return this.prepaymentAmount;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_PREPAYMENT_AMOUNT",
                    prepaymentAmount: value
                });
            }

        },
        selectedPrepaymentFrequncy: {
            get() {
                return this.prepaymentFrequency;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_PREPAYMENT_FREQUENCY",
                    prepaymentFrequency: value
                });
            }

        },
        selectedPrepaymentYear: {
            get() {
                return this.prepaymentYear;
            },
            set(value) {
                this.$store.commit({
                    type: "SET_PREPAYMENT_YEAR",
                    prepaymentYear: value
                });
            }

        },
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