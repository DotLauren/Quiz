import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AddQuizNameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello AddQuizName !</Text>
    </View>
  );
};

export default AddQuizNameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
