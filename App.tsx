import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-paper';
import { navigationTheme, paperTheme } from './constants/Theme';

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            <ThemeProvider theme={paperTheme}>
                <SafeAreaProvider>
                    <StatusBar />
                    <BottomTabNavigator />
                </SafeAreaProvider>
            </ThemeProvider>
        </NavigationContainer>
    );
}
