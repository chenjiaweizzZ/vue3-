<template>
    <div>vue-router</div>
    <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>
</template>

<script setup>

</script>

<style>
.router-link-active {
    font-size: 80px;
    color: brown;
}
</style>