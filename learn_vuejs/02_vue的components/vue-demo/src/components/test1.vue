<template>
  <div>
    <button @click="add(1)">+++</button>
  </div>
</template>

<script>
export default {
  name: "test1",
  emits: ["add"],
  methods: {
    add(num) {
      this.$emit("add", num);
    },
  },
};
</script>