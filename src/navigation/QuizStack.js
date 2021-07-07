import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { routes } from "../constants/routes";
import QuizStartScreen from "../screens/QuizStartScreen";
import QuizQuestionScreen from "../screens/QuizQuestionScreen";
import QuizResultScreen from "../screens/QuizResultScreen";

const { Navigator, Screen } = createStackNavigator();

const QuizStack = () => (
  <Navigator initialRouteName={routes.QUIZ_START}>
    <Screen component={QuizStartScreen} name={routes.QUIZ_START} />
    <Screen component={QuizQuestionScreen} name={routes.QUIZ_QUESTION} />
    <Screen component={QuizResultScreen} name={routes.QUIZ_RESULTS} />
  </Navigator>
);

export default QuizStack;
