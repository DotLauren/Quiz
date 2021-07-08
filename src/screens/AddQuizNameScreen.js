import React from "react";
import { TextInput, View, Pressable, Text } from "react-native";
import { styles } from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../constants/routes";

const AddQuizNameScreen = () => {
  const { navigate } = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const valideQuizName = () => {
    if (text === '') {
      setErrorMessage('mange tes mort');
    } else {
      setErrorMessage('');
      navigate(routes.ADD_QUIZ_QUESTION);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Quiz name!"
        clearButtonMode='while-editing'
      />
      <Pressable
        style={styles.button}
        onPress={valideQuizName}
      >
        <Text>Enregistrer</Text>
      </Pressable>
    </View>
  );
};

export default AddQuizNameScreen;

