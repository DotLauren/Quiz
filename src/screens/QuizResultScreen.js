import React from "react";
import { StyleSheet, Text, View } from "react-native";

const QuizResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello QuizResult !</Text>
    </View>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
