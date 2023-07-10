import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../routes/auth-routes";

type NavigationNotAuthParams = StackNavigationProp<AuthStackParamList>;

export const useNavigationAuth = () => {
  const navigation = useNavigation<NavigationNotAuthParams>();

  return navigation;
};
