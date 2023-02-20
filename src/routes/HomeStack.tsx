import { createStackNavigator } from '@react-navigation/stack';

// const HomeStack = createStackNavigator({

// });

const Stack = createStackNavigator();

function HomeStack() { 
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}