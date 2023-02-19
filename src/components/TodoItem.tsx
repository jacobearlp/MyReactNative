import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, onPressHandler}) { 

    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <TouchableOpacity onPress={() => { onPressHandler(item) }} style={{paddingHorizontal: 10, justifyContent: 'center'}}>
                    <MaterialIcons name='delete' size={20} color={'red'}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: { 
        padding: 15,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText: { 
        marginLeft: 10,
        flex: 1
    }
});