import React from "react";
import { TextInput, ScrollView, Pressable, Text, View } from "react-native";
import { styles } from "../styles/Styles";
import AddAnswer from "./AddAnswer";

const AddQuizQuestionScreen = () => {
  const [Question, onChangeQuestion] = React.useState('');
  const [answers, setAnswers] = React.useState([]);

  const addAnswer = (answer) => {
    var tmp = [...answers];

    if (tmp.find(element => element.index === answer.index) === undefined) {
      setAnswers([...answers, answer]);
    } else {
      tmp.forEach(function (element, index) {
        if (answer.index === index) {
          element.content = answer.answer.content;
        }
      })
      setAnswers(tmp);
    }
  };

  const valideQuiz = () => {

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeQuestion}
          value={Question}
          placeholder="Quel est le meilleur langage ?"
          clearButtonMode='while-editing'
        />

        <AddAnswer placeholder="C#" rightAnswer={true} addAnswer={addAnswer} index={0} />
        <AddAnswer placeholder="Java" rightAnswer={false} addAnswer={addAnswer} index={1} />
        <AddAnswer placeholder="TypeScript/JavaScript" rightAnswer={false} addAnswer={addAnswer} index={2} />
        <AddAnswer placeholder="Swift" rightAnswer={false} addAnswer={addAnswer} index={3} />

        <Pressable
          style={styles.button}
          onPress={valideQuiz}
        >
          <Text >Enregistrer</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddQuizQuestionScreen;
