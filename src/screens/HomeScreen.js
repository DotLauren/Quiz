import React from "react";
import { StyleSheet, Button, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        // onPress={}
        title="Créer un quiz"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        // onPress={}
        title="Faire un quiz"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
