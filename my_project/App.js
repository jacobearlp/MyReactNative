import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import TodoScreen from './src/screens/TodoScreen';
import CustomNavigationBarView from './src/components/CustomNavigationBarView';

export default function App() {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <TodoScreen />
        </SafeAreaView>
    </SafeAreaProvider>
  );
}