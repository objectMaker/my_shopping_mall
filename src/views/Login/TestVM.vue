<template>
  <input type="number" v-model="count1" />
  <button @click="changeCount">提交</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
});
// eslint-disable-next-line no-undef
const emit = defineEmits(["update:count"]);
const count1 = ref(0);
const changeCount = () => {
  emit("update:count", count1.value);
};
</script>
<!--<script>-->
<!--import { ref } from "vue";-->

<!--export default {-->
<!--  props: ["count"],-->
<!--  emits: ["update:count"],-->
<!--  setup(props, { emit }) {-->
<!--    const count1 = ref(0);-->
<!--    console.log(props);-->
<!--    const changeCount = () => {-->
<!--      emit("update:count", count1.value);-->
<!--    };-->
<!--    return {-->
<!--      count1,-->
<!--      changeCount,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<style></style>
