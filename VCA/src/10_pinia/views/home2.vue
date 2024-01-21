<template>
    <div>home2</div>
    <div>{{ counterStore.counter }}</div>
</template>

<script setup name="home1">
import useCounter from '../store/counter'

const counterStore = useCounter()

</script>