import { AppStackNavigator } from "./app-stack";
import { AuthStackNavigator } from "./auth-routes";

export const Routes = () => {
  const isAuthenticated = false;

  const route = isAuthenticated ? (
    <AppStackNavigator />
  ) : (
    <AuthStackNavigator />
  );

  return route;
};
