<template>
    <div>home1</div>
    <div>{{ counterStore.counter }}</div>
    <div>{{ counter }}</div>
    <!-- <div>{{ counterOri }}</div> -->
    <div>{{ name }}</div>
    <div>doubleCounter {{ counterStore.doubleCounter }}</div>
    <div>getMyfriendById {{ counterStore.getMyfriendById(4) }}</div>
    <div>showMessage {{ counterStore.showMessage }}</div>
    <button @click="counterAdd">+++++</button>
    <button @click="counterReset">reset</button>
    <button @click="counterChange">change</button>
</template>

<script setup name="home1">
import useCounter from '../store/counter'
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'

const counterStore = useCounter()

// const { counterOri } = toRefs(counterStore)
const { counter,name } = storeToRefs(counterStore)

const counterAdd = () => {
    counterStore.counter ++
}

const counterReset = () => {
    counterStore.$reset()
}

const counterChange = () => {
    // counterStore.$patch({
    //     name: 'lixiaoke',
    //     counter: 30
    // })
    counterStore.$state = {
        name: 'likeke',
        counter: 22
    }
}

</script>