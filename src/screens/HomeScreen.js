import React from "react";
import { Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../constants/routes";
import { styles } from "../styles/Styles";
import Switch from "../components/Switch";
import { useDarkTheme } from "../contexts/ThemeContext";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { newTheme } = useDarkTheme();

  return (
    <>
      <View style={{ backgroundColor: newTheme.background.dark }}>
        <Switch />
      </View>
      <View
        style={[
          styles.container,
          { backgroundColor: newTheme.background.dark },
        ]}
      >
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
    </>
  );
};

export default HomeScreen;
