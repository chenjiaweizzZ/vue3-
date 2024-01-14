<template>
    <div>
        showInfo num: {{ num }}
        <!-- <button @click="numAdd">+++</button> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineExpose({
    numAdd
})

const num = ref(0)

function numAdd(){
    num.value ++ 
}

</script>