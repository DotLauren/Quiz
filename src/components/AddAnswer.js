import React from "react";
import { TextInput } from "react-native";
import { styles } from "../styles/Styles";

const AddAnswer = (props) => {
    const [answer, setAnswer] = React.useState('');

    const onChangeAnswer = (value) => {
        setAnswer(value);
        props.addAnswer(
            {
                index: props.index,
                answer: {
                    content: value,
                    isCorrect: props.rightAnswer,
                }
            }
        );
    }

    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeAnswer(e)}
                value={answer}
                placeholder={props.placeholder}
                clearButtonMode='while-editing'
            />
        </>
    );
}

export default AddAnswer;