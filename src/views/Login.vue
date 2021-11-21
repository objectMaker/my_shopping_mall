<template>
  <div>{{ a }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const a = ref("222");
    return {
      a,
    };
  },
});
</script>
<style>
div {
  color: red;
  margin: 20px;
  height: 900px;
  width: 900px;
  padding: 20px;
}
</style>
