import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: 5,
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 5,
        borderRadius: 10,
    },
});