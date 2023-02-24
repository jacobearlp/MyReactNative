import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItemView(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{props.item.todo}</Text>
            <TouchableOpacity style={styles.deleteContainer}>
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