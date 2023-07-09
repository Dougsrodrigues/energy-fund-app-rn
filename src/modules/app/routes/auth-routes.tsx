import { SignIn } from "@/modules/authentication/pages";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components/native";

type AuthtackParamList = {
  SignIn: undefined;
};

const AuthStack = createStackNavigator<AuthtackParamList>();
export const AuthStackNavigator = () => {
  const theme = useTheme();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTitle: "",
        cardStyle: {
          backgroundColor: theme.colors.white,
        },
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};
