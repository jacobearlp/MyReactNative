import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import CustomNavigationBarView from "../components/CustomNavigationBarView";
import TodoFormView from "../components/TodoFormView";
import TodoItemView from "../components/TodoItemView";

export default function TodoScreen() {
    const [todos, setTodos] = useState([]);

    function todoFormOnSubmitHandler(textInput) {
        let newTodo = {todo: textInput, id: Math.random().toString() };
        setTodos((currentTodos) => [newTodo, ...currentTodos]);
    }

    function todoOnDeleteHandler(item) {
        setTodos((currentTodos) => currentTodos.filter((currentItem) => currentItem.id != item.id));
    }

    return (
        <View style={styles.container}> 
            <CustomNavigationBarView title="Todo"/>
            <TodoFormView onSubmit={todoFormOnSubmitHandler}/>
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
    }
})