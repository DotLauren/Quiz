import React from "react";
import { TextInput, View, Pressable, Text } from "react-native";
import { styles } from "../styles/Styles";

const AddQuizNameScreen = () => {
  const [text, onChangeText] = React.useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Quiz name!"
        clearButtonMode='while-editing'
      />
      <Pressable
        style={styles.button}
        onPress={() => navigate(routes.ADD_QUIZ_NAME)}
      >
        <Text >créer un quiz</Text>
      </Pressable>
    </View>
  );
};

export default AddQuizNameScreen;

