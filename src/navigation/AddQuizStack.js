import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../constants/routes";
import AddQuizName from "../screens/AddQuizNameScreen";
import AddQuizQuestion from "../screens/AddQuizQuestionScreen";

const { Navigator, Screen } = createStackNavigator();

const AddQuizStack = () => (
  <Navigator initialRouteName={routes.ADD_QUIZ_NAME}>
    <Screen component={AddQuizName} name={routes.ADD_QUIZ_NAME} />
    <Screen component={AddQuizQuestion} name={routes.ADD_QUIZ_QUESTION} />
  </Navigator>
);

export default AddQuizStack;
