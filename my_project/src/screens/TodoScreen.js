import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CustomNavigationBarView from "../components/CustomNavigationBarView";
import TodoFormView from "../components/TodoFormView";
import TodoItemView from "../components/TodoItemView";
import TodoFormModal from "./TodoFormModal";

export default function TodoScreen() {
    const [todos, setTodos] = useState([]);
    const [showTodoModal, setShowTodoModal] = useState(false);

    function todoFormOnSubmitHandler(textInput) {
        let newTodo = {todo: textInput, id: Math.random().toString() };
        setTodos((currentTodos) => [newTodo, ...currentTodos]);
    }

    function todoOnDeleteHandler(item) {
        setTodos((currentTodos) => currentTodos.filter((currentItem) => currentItem.id != item.id));
    }

    function addNewGoalModalHandler() { 
        setShowTodoModal(true);
    }

    function onCloseNewGoalModalHandler() { 
        setShowTodoModal(false);
    }


    return (
        <View style={styles.container}> 
            <CustomNavigationBarView title="Todo"/>
            {/* <TodoFormView onSubmit={todoFormOnSubmitHandler}/> */}
            <View> 
                <TouchableOpacity onPress={addNewGoalModalHandler}>
                    <Text>Add New Todo</Text>
                </TouchableOpacity>
            </View>
            <TodoFormModal 
                isVisible={showTodoModal} 
                onCloseModal={onCloseNewGoalModalHandler}
                onSubmit={todoFormOnSubmitHandler} />
            <View style={styles.listContainer}>
                <FlatList 
                    data={todos}
                    renderItem={({item}) => (
                        <TodoItemView item={item} onDelete={todoOnDeleteHandler}/>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    listContainer: { 
        flex: 1
    },
    addNewGoalButtonContainer: { 
        height: 40,
        color: 'white',
        backgroundColor: 'coral',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 24,
        marginTop: 20
    },
    addNewGoalButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})