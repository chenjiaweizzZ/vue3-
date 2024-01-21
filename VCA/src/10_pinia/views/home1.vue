<template>
    <div>home1</div>
    <div>{{ counterStore.counter }}</div>
    <div>{{ counter }}</div>
    <div>{{ counterOri }}</div>
    <button @click="counterAdd">+++++</button>
</template>

<script setup name="home1">
import useCounter from '../store/counter'
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'

const counterStore = useCounter()

// const { counterOri } = toRefs(counterStore)
const { counter } = storeToRefs(counterStore)

const counterAdd = () => {
    counterStore.counter ++
}

</script>