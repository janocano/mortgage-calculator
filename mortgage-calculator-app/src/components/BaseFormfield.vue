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
}
</script>
<style scoped>

</style>