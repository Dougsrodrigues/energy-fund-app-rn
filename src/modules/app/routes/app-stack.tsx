import { Home } from "@/modules/home/pages";
import { createStackNavigator } from "@react-navigation/stack";

export type AppStackParamList = {
  Home: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppStackNavigator=()=>{
  return <AppStack.Navigator>
    <AppStack.Screen
    name="Home"
    component={Home}
    />
  </AppStack.Navigator>
}