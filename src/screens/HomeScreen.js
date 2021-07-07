import React from "react";
import { Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../constants/routes";
import { styles } from "../styles/Styles";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigate(routes.ADD_QUIZ_NAME)}
      >
        <Text>créer un quiz</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigate(routes.QUIZ_START)}
      >
        <Text>Faire un quiz</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
