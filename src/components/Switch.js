import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDarkTheme } from "../contexts/ThemeContext";

const Switch = () => {
  const { toggleTheme } = useDarkTheme();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btnlightContainer}
          onPress={() => toggleTheme()}
        >
          <Text style={styles.btnlight}>☀️</Text>
          <Text style={styles.btndark}>🌛</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3C3F46",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 50,
  },
  btndarkContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  btndark: {
    fontSize: 30,
  },
  btnlightContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
  },
  btnlight: {
    fontSize: 30,
  },
});

export default Switch;
