import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AddQuizQuestionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello AddQuizQuestion !</Text>
    </View>
  );
};

export default AddQuizQuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
