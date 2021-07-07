import React from "react";
import { StyleSheet, Text, View } from "react-native";

const QuizStartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello QuizStart !</Text>
    </View>
  );
};

export default QuizStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
