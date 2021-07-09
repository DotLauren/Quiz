import React from "react";
import { TextInput, ScrollView, Pressable, Text, View } from "react-native";
import { styles } from "../styles/Styles";
import AddAnswer from "../components/AddAnswer";
import { db } from "../firebase";

const AddQuizQuestionScreen = () => {
  const [Question, onChangeQuestion] = React.useState('');
  const [totalQuestion, setTotalQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [formIsValid, setFormIsValid] = React.useState(true);

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

  const formIsValide = () => {
    if (Question === '') {
      setFormIsValid(false);
      return;
    } else if (answers.length === 0) {
      setFormIsValid(false);
      return;
    }

    var tmp = [...answers];
    tmp.forEach(function (element, index) {
      if (element.content === '') {
        setFormIsValid(false);
        return;
      }
    })
    setFormIsValid(true);
  };

  const valideQuiz = async () => {
    if (formIsValide()) {
      //const res = await db.collection('quiz').doc().set(data);
      setTotalQuestion(totalQuestion++);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        <View>
          <Text>Total : {totalQuestion}/5</Text>
        </View>

        {formIsValid === false ? <Text style={styles.errorMessage}>Mange tes mort</Text> : null}
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
