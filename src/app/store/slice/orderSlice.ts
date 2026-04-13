import { Order } from "@/app/types/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderSlice {
  order: Order[];
}
const initialState: OrderSlice = {
  order: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.order.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
