import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-paper';
import { navigationTheme, paperTheme } from './constants/Theme';

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={navigationTheme}>
                <ThemeProvider theme={paperTheme}>
                    <BottomTabNavigator />
                </ThemeProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}