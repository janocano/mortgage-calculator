<template>
    <div class="container">
        <div class="container__title">
            {{ title }}
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    }
};
</script>
<style scoped>
</style>