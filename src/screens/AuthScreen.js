import React from "react";
import { Text, View, Pressable } from "react-native";
import { routes } from "../constants/routes";
import { useNavigation } from '@react-navigation/native';
import { styles } from "../styles/Styles";

const AuthScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Hello Auth !</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigate(routes.HOME)}
      >
        <Text >test</Text>
      </Pressable>
    </View>
  );
};

export default AuthScreen;
