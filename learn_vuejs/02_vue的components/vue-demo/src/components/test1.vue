<template>
  <div>
    <button @click="add(1)">+++</button>
    <test-11></test-11>
  </div>
</template>

<script>
import test11 from "./test11.vue";
export default {
  name: "test1",
  components: {
    test11,
  },
  emits: ["add"],
  methods: {
    add(num) {
      this.$emit("add", num);
    },
  },
};
</script>