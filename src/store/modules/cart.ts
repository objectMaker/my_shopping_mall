export default {
  namespaced: true,
  state: {
    shopIds: [
      {
        id: 1211,
        count: 2,
      },
    ],
  },
  mutations: {
    editShop(
      state: any,
      payload: {
        id: number;
        count: number;
      }
    ) {
      //查找原来购物车有没有包含这个id
      const tempIndex = state.shopIds.findIndex(
        (item: { id: number; count: number }) => {
          return item.id === payload.id;
        }
      );
      if (tempIndex !== -1) {
        //如果有取出这一项进行重新赋值
        const temp = state.shopIds[tempIndex];
        temp.count = payload.count;
        //如果新的数据为0了就从原来数组中删除这一项
        if (temp.count === 0) {
          state.shopIds.splice(tempIndex, 1);
        }
      } else {
        payload.count > 0 && state.shopIds.push(payload);
      }
    },
  },
};
