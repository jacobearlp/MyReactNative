import { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import AddTodoForm from "../components/AddTodoForm";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";

export default function TodoView() {

    const [todos, setTodos] = useState([
        { text: 'buy coffee', id: '123ouasldkfjd' },
        { text: 'create an app', id: 'aslkdfjuoiasjdf' },
        { text: 'play on the switch', id: '1lk2j31ljkjlk' }
    ]);

    const [todoInput, setTodoInput] = useState("");

    function addTodo(text) { 
        if (text.length < 3) {
            Alert.alert('OOPS!', 'Todos must be over 3 characters long')
        } else {
            setTodos((prevData) => {
                return [
                    { text: text, id: randomId() },
                    ...prevData
                ]
            });
        }
    }

    function randomId() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        let length = 10
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    function itemPressedHandler(selectedItem) {
        setTodos((current) => {
            return current.filter((item) => item.id != selectedItem.id)
        });
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <SafeAreaView style={styles.container}>
                <Header />
                <ScrollView>
                    <View style={styles.content}>
                        <AddTodoForm onAddHandler={addTodo} />
                        <View style={styles.listContainer}>
                            <FlatList
                                data={(todos)}
                                renderItem={({ item }) => (
                                    <TodoItem item={item} onPressHandler={itemPressedHandler} />
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginHorizontal: 24,
        marginVertical: 5,
        padding: 15,
        fontSize: 17,
        backgroundColor: 'pink'
    },
    button: {
        marginHorizontal: 24,
        backgroundColor: 'orange'
    },
    content: {
        flex: 1
    },
    listContainer: {
        marginHorizontal: 24,
        flex: 1
    }
});