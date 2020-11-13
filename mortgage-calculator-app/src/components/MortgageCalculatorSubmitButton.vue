<template>
    <BaseButton @click.native="calculateMortgage()">
        <template slot="text">
            Calculate
        </template>
    </BaseButton>
</template>
<script>
import BaseButton from "./BaseButton.vue";
export default {
    components: {
        BaseButton
    },
    methods: {
        calculateMortgage(){
            
        }
    }
}
</script>
<style scoped>

</style>