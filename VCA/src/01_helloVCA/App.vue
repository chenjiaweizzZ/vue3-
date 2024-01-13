

<template>
  <div class="app">
    <div>{{ num }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import userCounter from "./hooks/userCounter"
export default {
  setup() {
  return {
    ...userCounter()
  }
}
}

</script>

