<template>
    {{ counter }}
    {{ counter2 }}
    <button @click="counter++">counterAdd</button>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
    const counter = ref(0)
    const counter2 = ref(0)
    const stopWatch = watchEffect(() => {
        counter2.value = counter.value
        //自动收集依赖
        if(counter.value > 9) {
            stopWatch()
        }
        //最多等于10
    })
</script>