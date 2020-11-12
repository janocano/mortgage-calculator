<template>
  <div id="app" class="mortgageCalculatorPage">
    <div class="mortgageCalculatorPage__title">Mortgage Calculator</div>
    <div class="mortgageCalculatorPage__calculatorSection">
      <div class="mortgageCalculatorPage__calculatorBoxes">
        <MortgageCalculatorPaymentPlanBox class="mortgageCalculatorBox" />
        <MortgageCalculatorPrepaymentBox class="mortgageCalculatorBox" />
      </div>
      <MortgageCalculatorResultsBox class="mortgageCalculatorBox--right" />
    </div>
 </div>
</template>

<script>
import MortgageCalculatorPaymentPlanBox from "./components/MortgageCalculatorPaymentPlanBox.vue";
import MortgageCalculatorPrepaymentBox from "./components/MortgageCalculatorPrepaymentBox.vue";
import MortgageCalculatorResultsBox from "./components/MortgageCalculatorResultsBox.vue";
export default {
  name: 'MortgageCalculatorPage',
  components: {
    MortgageCalculatorPaymentPlanBox,
    MortgageCalculatorPrepaymentBox,
    MortgageCalculatorResultsBox
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
.mortgageCalculatorPage__calculatorSection {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.mortgageCalculatorPage__calculatorBoxes {
  display: flex;
  flex-direction: column;
  min-width: 48%;
}
.mortgageCalculatorBox {
  margin: 10px 0;
}
.mortgageCalculatorBox--right {
  margin: 10px 0;
  margin-left: 20px;

}
</style>
