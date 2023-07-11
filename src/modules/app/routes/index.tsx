import { selectIsAuthenticated } from "@/modules/sign-in/store";
import { useAppSelector } from "../hooks";
import { AppStackNavigator } from "./app-stack";
import { AuthStackNavigator } from "./auth-routes";

export const Routes = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const route = isAuthenticated ? (
    <AppStackNavigator />
  ) : (
    <AuthStackNavigator />
  );

  return route;
};
