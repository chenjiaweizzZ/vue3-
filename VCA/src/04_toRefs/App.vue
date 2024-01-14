<template>
    <div>
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <div>{{ ageOne }}</div>
        <button @click="age++">++</button>
    </div>
</template>

<script setup>
import { reactive, toRefs, toRef } from 'vue';

const user = reactive({
    name: 'chenjiawei',
    age: 18
})
const { name, age } = toRefs(user)
const ageOne = toRef(user,"age")
// reactive被解构出来就是普通的值,所以我们需要使用toRefs
</script>