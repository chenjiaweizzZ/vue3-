<template>
    <div>
        <div ref="titleRef" class="title">我是title</div>
        <div ref="contentRef">我是content</div>
        <show-info ref="showInfoRef"></show-info>
        <button @click="get">AppBtn</button>
    </div>
</template>

<script setup> 
import { onMounted, ref } from 'vue';
import showInfo from './showInfo.vue'
const titleRef = ref()
const showInfoRef = ref()
onMounted(() => {
    console.log(showInfoRef.value)
})
const get = () => {
    showInfoRef.value.numAdd()
}
</script>