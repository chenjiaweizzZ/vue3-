<template>
    <div>vue-router</div>
    <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/user/123">用户</router-link>
        <router-link to="/user/456">用户</router-link>
        <button @click="home">首页</button>
        <button @click="about">关于</button>
        <button @click="user">用户</button>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const home = () => {
    router.push({
        name: 'homeRank',
        query: {
            name: 'chenjiawei'
        }
    })
}
const about = () => {
    router.push({
        name: 'about',
        query: {
            name: 'chenjiawei123'
        }
    })
}
const user = () => {
    router.push({
        path: '/user/chenjiawei',
    })
    // router.push("/user/chenjiawei")
}
</script>

<style>
.router-link-active {
    font-size: 80px;
    color: brown;
}
</style>