import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <StatusBar />
                <BottomTabNavigator />
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
