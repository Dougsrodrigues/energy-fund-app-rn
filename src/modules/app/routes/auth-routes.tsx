import { SignIn } from "@/modules/authentication/pages";
import { createStackNavigator } from "@react-navigation/stack";

type AuthtackParamList = {
  SignIn: undefined;
};

const AuthStack = createStackNavigator<AuthtackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};
