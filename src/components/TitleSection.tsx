import { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function TitleSection() {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                {/* Place name, and location */}
                <Text style={styles.titleHeading}>Oeschinen Lake Campground</Text>
                <Text style={styles.titleSubheading}>Kandersteg, Switzerland</Text>
            </View>
            <View style={styles.ratingView}>
                {/* Rating */}
                <Text>⭐️</Text>
                <Text style={styles.ratingTotal}>41</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 24,
        alignItems: 'center'
    },
    titleView: {
        flex: 1
    },
    titleHeading: {
        fontWeight: 'bold',
        fontSize: 17
    },
    titleSubheading: {
        color: 'gray'
    },
    ratingView: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        paddingVertical: 15
    },
    ratingStar: {
    },
    ratingTotal: {
        marginLeft: 5
    }
});