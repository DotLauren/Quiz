import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { routes } from "../constants/routes";
import { useNavigation } from '@react-navigation/native';

const AuthScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Hello Auth !</Text>
      <Button
        onPress={() => navigate(routes.HOME)}
        title="test"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
