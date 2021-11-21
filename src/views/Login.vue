<template>
  <div v-for="(item, index) in shopIds" :key="index">
    {{ index + 1 }}. id是{{ item.id }},数量为{{ item.count }}
  </div>
  <div>id: <input type="number" v-model="id" /></div>
  <div>数量: <input type="number" v-model="count" /></div>
  <button @click="submit">提交</button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();
    const id = ref(0);
    const count = ref(0);
    // computed 计算之后的都是ref对象
    const shopIds = computed(() => {
      return store.state.cart.shopIds;
    });
    const submit = () => {
      store.commit("cart/editShop", {
        id: id.value,
        count: count.value,
      });
    };
    return {
      shopIds,
      id,
      count,
      submit,
    };
  },
});
</script>
<style></style>
