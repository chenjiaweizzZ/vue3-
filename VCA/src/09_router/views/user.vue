<template>
    user{{ $route.params.id }}
    {{ route.params.id }}
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
const route = useRoute()
// console.log('user:',route.params.id)
onBeforeRouteUpdate((to,from) => {
    console.log(to.params.id,from.params.id)
})
</script>