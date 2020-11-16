<template>
    <button class="button" :disabled="isDisabled">
		<div><slot name="text"></slot></div>
    </button>
</template>
<script>
export default {
    props: {
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
}
</script>
<style scoped>
.button {
	display: flex;
	align-items: center;
	justify-content: center;
    height: 25px;
    width: fit-content;
	border: 0px;
	border-radius: 5px;
    background-color: #005DAA;
	font-size: 14px;
	font-weight: bold;
	color: #FFD200;
	padding: 10px 20px;
	outline: none;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	cursor: pointer;
}
.button:hover {
    background-color: #004f8f;
}
.button:disabled {
    opacity: 0.35;
	cursor: not-allowed;
}
</style>