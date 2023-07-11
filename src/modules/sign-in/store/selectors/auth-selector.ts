import { RootState } from "@/modules/app/store/store";

export const selectIsAuthenticated = (state: RootState) =>
  state.authReducer.isAuthenticated;
