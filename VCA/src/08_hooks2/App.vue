<template>
  <div>
    <div>{{ counter }}</div>
    <div>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup>
import useCounter from "./hooks/useCounter";
const { counter, decrement, increment } = useCounter();
// return { ...useCounter() };
</script>