<template>
    <div>
        <div>num: {{ num }}</div>
        <div>age: {{ user.userInfo.age }}</div>
        <button @click="num++">++++</button>
        <button @click="user.userInfo.age++">++++</button>
    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

const num = ref(0)

const user = reactive({
    name: 'chenjiawei',
    userInfo: {
        age: 18
    }
})

watch(num, (newValue,oldValue) => {
    console.log(newValue,oldValue)
})

watch(() => ({ ...user }), (newValue,oldValue) => {
    console.log(newValue.userInfo.age,oldValue)
},{
    deep: true,
    immediate: true
})

</script>