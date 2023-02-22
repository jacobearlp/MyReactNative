import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CustomNavigationBarView({title}) { 
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral'
    },
    textContainer: { 
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 5
    }
});