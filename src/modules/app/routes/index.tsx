import { AuthStackNavigator } from "./auth-routes";

export const Routes = () => {
  const isAuthenticated = false;

  const route = isAuthenticated ? (
    <AuthStackNavigator />
  ) : (
    <AuthStackNavigator />
  );

  return route;
};
