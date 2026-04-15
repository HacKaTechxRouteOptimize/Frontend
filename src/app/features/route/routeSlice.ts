import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Route } from "@/app/types/route";

export interface RouteState {
  routes: Route[];
}
const initialState: RouteState = {
  routes: [],
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    addRoute: (state, action: PayloadAction<Route>) => {
      state.routes.push(action.payload);
    },
    deleteRoute: (state, action: PayloadAction<number>) => {
      state.routes = state.routes.filter((r) => r.id != action.payload);
    },
    patchRoute: (state, action: PayloadAction<Route>) => {
      const prevIndex = state.routes.findIndex(
        (r) => r.id == action.payload.id,
      );
      if (prevIndex != -1) {
        state.routes[prevIndex] = action.payload;
      }
    },
  },
});

export const { addRoute, deleteRoute, patchRoute } = routeSlice.actions;
export default routeSlice.reducer;
