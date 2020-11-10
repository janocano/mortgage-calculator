<template>
  <div id="app" class="mortgageCalculatorPage">
    <div class="mortgageCalculatorPage__title">Mortgage Calculator</div>
    <MortgageCalculatorPaymentPlanBox />
 </div>
</template>

<script>
import MortgageCalculatorPaymentPlanBox from "./components/MortgageCalculatorPaymentPlanBox.vue";
export default {
  name: 'MortgageCalculatorPage',
  components: {
    MortgageCalculatorPaymentPlanBox
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
