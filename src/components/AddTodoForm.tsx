import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button } from 'react-native';

export default function AddTodoForm({onAddHandler}) { 
    const [text, setText] = useState('');

    function changeTextHandler(text) { 
        setText(text);
    }

    function onSubmit(text) {
        onAddHandler(text) 
        setText('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                placeholder='Add todo...'
                onChangeText={changeTextHandler}
                style={styles.textInputStyle}
            />
            <View style={styles.buttonStyle}>
                <Button title='Add todo' color='white' onPress={ () => { onSubmit(text)}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        marginHorizontal: 24,
        marginTop: 30,
        padding: 10,
        flex: 1,
        flexDirection: 'row'
    },
    textInputStyle: {
        paddingHorizontal: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flex: 1
    },
    buttonStyle: { 
        marginTop: 10,
        backgroundColor: 'coral',
        borderRadius: 8,
        marginLeft: 15
    }
});