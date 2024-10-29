<template>
  <div>
    <h1>{{ num }}</h1>
    <test-1 :num="num" @add="adder"></test-1>
  </div>
</template>

<script>
import test1 from "./components/test1.vue";
import { computed } from "vue";
export default {
  name: "App",
  data() {
    return {
      num: 1,
      name: "chenjiawei",
    };
  },
  components: {
    test1,
  },
  // provide: {
  //   name: "chenjiawei",
  // },
  provide() {
    return {
      name: computed(() => {
        return this.num;
      }),
    };
  },
  methods: {
    adder(number) {
      console.log(number);
      this.num += number;
    },
  },
};
</script>

<style>
</style>
