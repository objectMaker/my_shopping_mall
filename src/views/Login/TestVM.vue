<template>
  <input type="number" v-model="count1" />
  <button @click="changeCount">提交</button>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["count"],
  emits: ["update:count"],
  setup(props, { emit }) {
    const count1 = ref(0);
    console.log(props);
    const changeCount = () => {
      emit("update:count", count1.value);
    };
    return {
      count1,
      changeCount,
    };
  },
};
</script>

<style></style>
