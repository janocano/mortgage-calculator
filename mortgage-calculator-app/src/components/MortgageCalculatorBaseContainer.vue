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
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #f0f0f0;
    border: 1px solid #005DAA;
    border-radius: 5px;
}
.container__title {
    display: flex;
    justify-content: left;
    align-items: center;
    background-color:#005DAA;
    padding: 10px 20px;
    color: #fff;
}
</style>