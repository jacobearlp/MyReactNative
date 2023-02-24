import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItemView(props) {
    function onDeleteHandler() { 
        props.onDelete(props.item);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{props.item.todo}</Text>
            <TouchableOpacity 
                style={styles.deleteContainer}
                onPress={onDeleteHandler} >
                <MaterialIcons name="delete" size={20} color={'red'}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 5,
        borderStyle: 'dashed',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
    textContainer: { 
        font: 17,
        flex: 1,
        marginRight: 10
    },
    deleteContainer: { 
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});