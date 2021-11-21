<template>
  <div>
    {{ a }} <span>111</span>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
    </ul>
    <a href="javascript:;">吃饭</a>
  </div>
  吃饭
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
<style></style>
