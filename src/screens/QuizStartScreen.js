import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Switch from "../components/Switch";
import { useDarkTheme } from "../contexts/ThemeContext";

const QuizStartScreen = () => {
  const { newTheme } = useDarkTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

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
        <Text style={[styles.title, { color: newTheme.text.base }]}>
          Hello QuizStart !
        </Text>

        {showScore ? (
          <Text>
            You scored {score} out of {questions.length}
          </Text>
        ) : (
          <>
            <Text style={[(styles.title, { color: newTheme.text.base })]}>
              {questions[currentQuestion].questionText}
            </Text>
            <View>
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    <Text style={[{ color: newTheme.text.base }]}>
                      {answerOption.answerText}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default QuizStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  question: {
    fontSize: 24,
  },
});
