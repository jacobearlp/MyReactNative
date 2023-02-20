import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native'

export default function HomeScreen() { 
    return (
        <View style={styles.container}>
            <Text style={[styles.titleText, styles.test]}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: { 
        fontFamily: 'nunito-bold'
    },
    test: { 
        color: 'blue'
    }
});