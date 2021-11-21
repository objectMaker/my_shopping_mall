export default {
  state: {
    namespaced: true,
    shopIds: [],
  },
  mutations: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    ["EDIT_SHOP"](
      state: any,
      payload: {
        id: number;
        count: number;
      }
    ) {
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      const tempIndex = state.shopIds.splice(
        state.shopIds.findIndex((item: { id: number; count: number }) => {
          item.id === payload.id;
        })
      );
      if (tempIndex !== -1) {
        const temp = state.shopIds[tempIndex];
        temp.count = payload.count;
        if (temp.count === 0) {
          state.shopIds.splice(tempIndex, 1);
        }
      } else {
        state.shopIds.push(payload);
      }
    },
  },
};
