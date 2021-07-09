import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { routes } from "../constants/routes";
import HomeScreen from "../screens/HomeScreen";
import AddQuizStack from "./AddQuizStack";
import QuizStack from "./QuizStack";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator initialRouteName={routes.HOME} headerMode='none'>
    <Screen component={HomeScreen} name={routes.HOME} />
    <Screen component={AddQuizStack} name={routes.ADD_QUIZ_NAME} />
    <Screen component={QuizStack} name={routes.QUIZ_START} />
  </Navigator>
);

export default HomeStack;
