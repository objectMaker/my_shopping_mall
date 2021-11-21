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
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    editShop(
      state: any,
      payload: {
        id: number;
        count: number;
      }
    ) {
      console.log(payload);
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      const tempIndex = state.shopIds.findIndex(
        (item: { id: number; count: number }) => {
          return item.id === payload.id;
        }
      );
      if (tempIndex !== -1) {
        console.log(tempIndex);
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
