import { NavigationContainer } from "@react-navigation/native";
interface NavigatorProviderProps {
  children: React.ReactNode;
}
export const NavigatorProvider = ({ children }: NavigatorProviderProps) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
