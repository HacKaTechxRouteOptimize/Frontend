import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Route } from "@/app/types/route";

export interface RouteState {
  routes: Route[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: RouteState = {
  routes: [],
  status: "idle",
  error: null,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    addRoute: (state, action: PayloadAction<Route>) => {
      state.routes.push(action.payload);
    },
  },
});

export const { addRoute } = routeSlice.actions;
export default routeSlice.reducer;
