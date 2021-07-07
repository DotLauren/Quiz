import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { routes } from "../constants/routes";
import AuthScreen from "../screens/AuthScreen";
import HomeStack from "./HomeStack";

const { Navigator, Screen } = createStackNavigator();

const MainStack = () => (
  <Navigator initialRouteName={routes.AUTH} headerMode="none">
    <Screen component={AuthScreen} name={routes.AUTH} />
    <Screen component={HomeStack} name={routes.HOME} />
  </Navigator>
);

export default MainStack;
