import Vue from 'vue';
import MortgageCalculatorPage from './MortgageCalculatorPage.vue';

import store from "./store/main.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(MortgageCalculatorPage),
  store
}).$mount('#app')
