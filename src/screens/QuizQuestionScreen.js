import React from "react";
import { StyleSheet, Text, View } from "react-native";

const QuizQuestionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello QuizQuestion !</Text>
    </View>
  );
};

export default QuizQuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
