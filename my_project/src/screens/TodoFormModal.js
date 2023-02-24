import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import TodoFormView from "../components/TodoFormView";

export default function TodoFormModal(props) { 

    function onCloseHandler() { 
        props.onCloseModal();
    }

    function todoFormOnSubmitHandler(textInput) {
        props.onSubmit(textInput);
    }

    return (
        <Modal visible={props.isVisible} animationType={'slide'}>
            <SafeAreaProvider>
                <SafeAreaView style={{flex: 1}}>
                    <View>
                        <View>
                            <TouchableOpacity 
                                style={styles.deleteContainer}
                                onPress={onCloseHandler} >
                                <MaterialIcons name="close" size={20} color={'red'}/>
                            </TouchableOpacity>
                        </View>
                        <TodoFormView onSubmit={todoFormOnSubmitHandler} />
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </Modal>
    );
}

const styles = StyleSheet.create({
    deleteContainer: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});