import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CustomNavigationBarView from "../components/CustomNavigationBarView";
import TodoItemView from "../components/TodoItemView";

export default function TodoScreen() {
    const [todos, setTodos] = useState([
        {todo: "this is a sample todo", id: '1'},
        {todo: "this is a sample todo", id: '2'},
        {todo: "this is a sample todo", id: '3'},
        {todo: "this is a sample todo", id: '4'},
        {todo: "this is a sample todo", id: '5'},
        {todo: "this is a sample todo", id: '6'},
        // {todo: "this is a sample todoasd flkasdflak jdflkajdsfalk sjfalkfjas", id: '7'},
        // {todo: "this is a sample todoasd flkasdflak jdflkajdsfalk sjfalkfjas", id: '8'},
        // {todo: "this is a sample todoasd flkasdflak jdflkajdsfalk sjfalkfjas", id: '9'},
        // {todo: "this is a sample todoasd flkasdflak jdflkajdsfalk sjfalkfjas", id: '10'},
        // {todo: "this is a sample todoasd flkasdflak jdflkajdsfalk sjfalkfjas", id: '11'},
        // {todo: "this is a sample todoasd flkasdflak jdflkajdsfalk sjfalkfjas", id: '12'},
        // {todo: "this is a sample todoasd flkasdflak jdflkajdsfalk sjfalkfjas", id: '13'},
        {todo: "ahahahhaha sjfalkfjas", id: '14'},
    ]);

    return (
        <View style={styles.container}> 
            <CustomNavigationBarView title="Todo"/>
            <ScrollView>
                <View style={styles.todoListContainer}>
                    <FlatList data={todos}
                        renderItem={({item}) => (
                            <TodoItemView item={item}/>
                    )} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        // flex: 1,
        // backgroundColor: 'blue'
    },
    todoListContainer: { 
        // flex: 1,
    }
})