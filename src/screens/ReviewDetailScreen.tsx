import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReviewDetailScreen() { 
    return (
        <View style={styles.container}>
            <Text>Review Detail Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});