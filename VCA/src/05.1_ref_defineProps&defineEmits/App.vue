<template>
    <user-info name="chenjiawei" @btn-click="btnClick" @btn-click2="btnClick" ></user-info>
</template>
    
<script setup>
    import userInfo from './userInfo.vue'
    const btnClick = (value) => {
        console.log(value)
    }
</script>
    
<style>
    
</style>