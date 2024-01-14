<template>
    <div>{{ name }}</div>   
    <button @click="showBtn">showBtn</button> 
    <button @click="showBtn2">showBtn2</button>       
</template>
    
<script setup>
    defineProps({
        name: {
            type: String,
            default: ''
        }
    })
    const emit = defineEmits(["btnClick","btnClick2"])
    const showBtn = () => {
        emit("btnClick","内部发生点击")
    }
    const showBtn2 = () => {
        emit("btnClick2","内部发生点击2")
    }
</script>
    
<style>
    
</style>