<template>
    <div>userInfo:name: {{ user.name }}</div>
    <div>userInfo:age: {{ user.age }}</div>
    <!-- <button @click="user.age++">++++</button> -->
    <!-- 每个组件应该像纯函数一样,不可以直接修改传入的props -->
    <button @click="changeUser">++++</button>
</template>

<script setup>
    let props = defineProps({
        user: {
            type: Object,
            default: () => ({})
        }
    })
    // const emits = ['update:user']
    // const changeUser = () => {
        
    // }
</script>