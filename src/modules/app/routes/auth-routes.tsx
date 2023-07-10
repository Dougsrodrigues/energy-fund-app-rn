import { SignUp } from "@/modules/sign-up/pages";
import { SignIn } from "@/modules/sign-in/pages";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();
export const AuthStackNavigator = () => {
  const theme = useTheme();

  const isIos = Platform.OS === "ios";
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTitle: "",
        headerTintColor: theme.colors.black,
        headerLeftLabelVisible: false,
        cardStyle: {
          backgroundColor: theme.colors.white,
        },
        headerStyle: {
          borderBottomWidth: isIos ? 0.1 : 0.3,
          borderColor: theme.colors.grey100,
        },
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};
