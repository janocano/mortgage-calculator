<template>
  <div id="app" class="mortgageCalculatorPage">
    <div class="mortgageCalculatorPage__title">Mortgage Calculator</div>
    <MortgageCalculatorPaymentPlanBox />
    <MortgageCalculatorPrepaymentBox />
 </div>
</template>

<script>
import MortgageCalculatorPaymentPlanBox from "./components/MortgageCalculatorPaymentPlanBox.vue";
import MortgageCalculatorPrepaymentBox from "./components/MortgageCalculatorPrepaymentBox.vue";
export default {
  name: 'MortgageCalculatorPage',
  components: {
    MortgageCalculatorPaymentPlanBox,
    MortgageCalculatorPrepaymentBox
  },
}
</script>

<style>
#app {
  font-family: system-ui;
}
.mortgageCalculatorPage {
  padding: 10vh 10vw;
  display: flex;
  flex-direction: column;
}
.mortgageCalculatorPage__title {
  font-size: 64px;
  font-weight: bold;
  color: #005DAA;
}
</style>
