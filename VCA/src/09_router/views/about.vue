<template>
    about
    <div>back</div>
    <button @click="backBtn">back</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const backBtn = () => {
    // router.back()
    router.go(-1)
}
</script>