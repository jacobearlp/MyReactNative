import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() { 
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Title
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        backgroundColor: 'coral',
        paddingBottom: 10
    },
    title: { 
        fontSize: 30,
        paddingHorizontal: 8,
        color: '#fff',
        fontWeight: 'bold'
    }
});