import { View, Text, StyleSheet } from 'react-native';

export default function TextSection() { 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1
    },
    text: { 
        marginHorizontal: 24
    }
});