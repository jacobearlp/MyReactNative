import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TodoFormView(props) {
    const [textInput, setTextInput] = useState('');

    function onSubmitHandler() { 
        props.onSubmit(textInput);
        textInputHandler("");
    }

    function textInputHandler(textInput) { 
        setTextInput(textInput);
    }

    return (
        <View style={styles.container}>
            <View style={styles.textInputView}>
              <TextInput 
                placeholder="Eat spaghetti" 
                style={styles.textInput} 
                onChangeText={textInputHandler} 
                value={textInput}
              />
            </View>
            <TouchableOpacity style={styles.todoButtonView} onPress={onSubmitHandler}>
                <Text style={styles.todoButtonText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 24,
        marginVertical: 10, 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1, 
        paddingBottom: 5
    },
    textInputView: { 
        flex: 1, 
        justifyContent: 'center', 
        alignContent: "center"
    },
    textInput: { 
        height: 45,
        fontSize: 20
    },
    todoButtonView: {
        height: 40,
        color: 'white',
        backgroundColor: 'coral',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    todoButtonText: { 
        color: 'white',
        marginHorizontal: 10,
        fontSize: 18
    }
});