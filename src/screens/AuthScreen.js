import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Auth !</Text>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
