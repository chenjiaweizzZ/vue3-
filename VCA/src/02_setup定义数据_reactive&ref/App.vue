
<template>
    <div class="app">
      <div>username: {{ userInfo.username }}</div>
      <div>password: {{ userInfo.password }}</div>
      <button @click="change">change</button>
      <div>NUM: {{ num }}</div>
      <button @click="add">+</button>
      <button @click="min">-</button>
    </div> 
  </template>
  
  <script setup>
import { reactive, ref } from 'vue';
    const userInfo = reactive({
      username: 'chenjiawei',
      password: '123456'
    })
    const num = ref(0)
    const change = () => {
      userInfo.username = 'liuxiaoke',
      userInfo.password = '654321'
    }
    const add = () => {
      num.value ++
    }
    const min = () => {
      num.value --
    }
  </script>