import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { routes } from "../constants/routes";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        // onPress={}
        title='Créer un quiz'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
      <Button
        onPress={() => navigate(routes.QUIZ_START)}
        title='Faire un quiz'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
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
