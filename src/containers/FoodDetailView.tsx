import { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import TextSection from "../components/TextSection";
import TitleSection from "../components/TitleSection";

export default function FoodDetailView() {
    return (
        <SafeAreaView style={stlyes.container}>
            <TitleSection />
            <TextSection />
        </SafeAreaView>
    );
}

const stlyes = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    text: {
        alignContent: 'center',
        backgroundColor: 'blue'
    }
});