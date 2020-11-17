<template>
    <select :id="id" name="cars" class="selectMenu" @input="handleInput">
        <option disabled value selected>{{ placeholder }}</option>
        <option v-for="option in options" :value="option.value" v-bind:key="option.value">{{ option.text }}</option>
    </select>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            default: "baseSelect"
        },
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        placeholder: {
            type: String,
            default: "Select an option"
        }
    },
    methods: {
        /**
         * @param {InputEvent} event
         * @returns {void}
         */
        handleInput(event){
            this.$emit("input", event.target.value)
        }
    }
}
</script>
<style scoped>
.selectMenu {
    height: 25px;
    border-radius: 5px;
    border: 1px solid #005DAA;
    box-sizing: unset;
    outline: none;
    padding: 4px 12px;
    font-size: 12px;
    color: #005DAA;
    cursor: pointer;
}
.selectMenu:hover {
    background-color: #f0f0f0;
}
</style>