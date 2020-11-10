<template>
    <div class="formfield">
        <input 
            :id="id"
            class="formfield__input" 
            :class="{ 'formfield__input--disabled': isDisabled }"
            :type="type"
            :disabled="isDisabled"
            :value="value"
            :placeholder="placeholder"
            @input="handleInput"
        />
    </div>
</template>
<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        value: {
            type: [String, Number]
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        /**
         * @param {InputEvent} event
         * @returns {void}
         */
        handleInput(event) {
            this.$emit("input", event.target.value);
        }
    }
}
</script>
<style scoped>
.formfield__input {
    height: 25px;
    border-radius: 5px;
    border: 1px solid #005DAA;
    outline: none;
    padding: 4px 12px;
    font-size: 12px;
    color: #005DAA;
}
::-webkit-input-placeholder {
    font-size: 12px;
}
.formfield__input:focus {
    border-color: #FFD200;
}
.formfield__input--disabled {
    opacity: 0.75;
    color: #000;
}
</style>