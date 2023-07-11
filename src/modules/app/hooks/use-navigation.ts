import { useNavigation as useNavigationRN } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../routes/auth-routes";
import { AppStackParamList } from "../routes/app-stack";

type NavigationAuthParams = StackNavigationProp<AuthStackParamList>;
type NavigationAppParams = StackNavigationProp<AppStackParamList>;

export const useNavigation = () => {
  const navigation = useNavigationRN<NavigationAuthParams&NavigationAppParams>();

  return navigation;
};

